import { revalidateTag } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";

const TYPE_TO_TAG: Record<string, string> = {
  faculty: "faculty",
  staff: "staff",
  event: "events",
  download: "downloads",
  galleryItem: "gallery",
  course: "courses",
  peo: "obe",
  plo: "obe",
  visionMission: "obe",
  siteSettings: "settings",
};

export async function POST(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get("secret");
  const type = req.nextUrl.searchParams.get("type");

  if (secret !== process.env.REVALIDATION_SECRET) {
    return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
  }

  if (!type || !TYPE_TO_TAG[type]) {
    return NextResponse.json(
      { message: `Unknown type: ${type}` },
      { status: 400 },
    );
  }

  revalidateTag(TYPE_TO_TAG[type]);
  return NextResponse.json({ revalidated: true, tag: TYPE_TO_TAG[type] });
}
