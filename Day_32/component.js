class F8 {
    constructor() {}
    static component(name, obj) {
        customElements.define(
            name,
            class extends HTMLElement {
                constructor() {
                    super();
                }
                connectedCallback() {
                    let templateEl = document.createElement("template");
                    templateEl.innerHTML = obj.template;
                    let template = templateEl.content.cloneNode(true);
                    let variables = obj.template.match(/{{.+?}}/g);
                    if (variables) {
                        variables.forEach((i) => {
                            let variable = i.match(/{{(.+?)}}/);
                            Array.from(template.children).forEach((element) => {
                                let nameVariable = variable[1].trim();
                                element.innerHTML =
                                    element.innerHTML.replaceAll(
                                        variable[0],
                                        `<span id=${nameVariable}>${window[nameVariable]}</span>`
                                    );
                            });
                        });
                    }
                    Array.from(template.children).forEach((el) => {
                        Array.from(el.attributes).forEach((attr) => {
                            let indexEvent = attr.name.indexOf(":") + 1;
                            let eventName = attr.name.slice(indexEvent);
                            let action = attr.value;
                            el.addEventListener(eventName, function () {
                                eval(action);
                                variables.forEach((i) => {
                                    let variable = i.match(/{{(.+?)}}/);
                                    let nameVariable = variable[1].trim();
                                    let spanElementsList =
                                        this.parentElement.querySelectorAll(
                                            `#${nameVariable}`
                                        );
                                    Array.from(spanElementsList).forEach(
                                        (span) => {
                                            if (
                                                window[nameVariable] !=
                                                span.innerText
                                            )
                                                span.innerText =
                                                    window[nameVariable];
                                        }
                                    );
                                });
                            });
                        });
                    });
                    this.append(template);
                }
            }
        );
        if (obj.data?.()) {
            let data = obj.data?.();
            for (let key in data) {
                window[key] = data[key];
            }
        }
    }
}
