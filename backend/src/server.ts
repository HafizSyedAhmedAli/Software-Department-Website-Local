import app from "./app";
import { ENV } from "./config/env";

app.listen(Number(ENV.PORT), () => {
  console.log(`✓ Express API → http://localhost:${ENV.PORT}`);
  console.log(`✓ Environment → ${ENV.NODE_ENV}`);
  console.log(`✓ CORS origin → ${ENV.FRONTEND_URL}`);
});
