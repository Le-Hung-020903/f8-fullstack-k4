const GoogleStrategy = require("passport-google-oauth20").Strategy;
const { User, Provider } = require("../models/index");

require("dotenv").config();
module.exports = new GoogleStrategy(
  {
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/google/callback",
    scope: ["email", "profile"],
  },
  async (accessToken, refreshToken, profile, done) => {
    const email = profile._json.email;
    const name = profile.displayName;
    const providerId = profile.id;

    const [provider] = await Provider.findOrCreate({
      where: { id: providerId },
      defaults: {
        id: providerId,
        name: profile.provider,
      },
    });

    const [user] = await User.findOrCreate({
      where: { email },
      defaults: {
        name,
        email,
        providerId: provider.id,
      },
    });

    if (!user.provider_id) {
      user.provider_id = provider.id;
      await user.save();
    }

    return done(null, user);
  }
);
