// frontend/src/app/api/jogos/route.ts
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const modelo = searchParams.get("modelo") ?? "a";

  try {
    const backendUrl = `http://backend:8080/api/jogos?modelo=${modelo}`;

    const res = await fetch(backendUrl, {
      cache: "no-store",
    });

    if (!res.ok) {
      return NextResponse.json(
        { error: "Erro ao consultar backend" },
        { status: 500 }
      );
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Falha de conexão com backend" },
      { status: 500 }
    );
  }
}
