import { NextResponse } from "next/server";

const BASIC_AUTH_USER = "qa";
const BASIC_AUTH_PASSWORD = "br";

export function proxy(request) {
  const authHeader = request.headers.get("authorization");

  if (authHeader) {
    const [scheme, encoded] = authHeader.split(" ");

    if (scheme === "Basic" && encoded) {
      const [user, password] = atob(encoded).split(":");

      if (user === BASIC_AUTH_USER && password === BASIC_AUTH_PASSWORD) {
        return NextResponse.next();
      }
    }
  }

  return new NextResponse("Autenticação necessária.", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="BBI", charset="UTF-8"',
    },
  });
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
