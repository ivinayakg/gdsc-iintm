module.exports = ({ env }) => {
  console.log(env("CORS_ORIGIN", "").split(","), "here");

  return [
    "strapi::logger",
    "strapi::errors",
    "strapi::security",
    "strapi::poweredBy",
    "strapi::query",
    "strapi::body",
    "strapi::session",
    "strapi::favicon",
    "strapi::public",
    {
      name: "strapi::cors",
      config: {
        origin: env("CORS_ORIGIN", "").split(","),
        methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "HEAD", "OPTIONS"],
        headers: ["Content-Type", "Authorization", "Origin", "Accept"],
        keepHeaderOnError: true,
      },
    },
  ];
};
