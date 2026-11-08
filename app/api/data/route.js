import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import {
  INITIAL_PROFILE,
  INITIAL_PROJECTS,
  INITIAL_SKILLS,
  INITIAL_SERVICES
} from "@/lib/siteData";

const DATA_FILE = path.join(process.cwd(), "data", "site-data.json");

function getInitialData() {
  return {
    profile: INITIAL_PROFILE,
    projects: INITIAL_PROJECTS,
    skills: INITIAL_SKILLS,
    services: INITIAL_SERVICES,
    appointments: [],
    messages: []
  };
}

function readData() {
  try {
    if (fs.existsSync(DATA_FILE)) {
      const content = fs.readFileSync(DATA_FILE, "utf-8");
      return JSON.parse(content);
    }
  } catch (e) {
    console.error("Error reading site-data.json:", e);
  }
  const initial = getInitialData();
  writeData(initial);
  return initial;
}

function writeData(data) {
  try {
    const dir = path.dirname(DATA_FILE);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), "utf-8");
  } catch (e) {
    console.error("Error writing site-data.json:", e);
  }
}

// CORS Headers helper
function corsHeaders() {
  return {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization, x-admin-pin"
  };
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: corsHeaders()
  });
}

export async function GET() {
  const data = readData();
  return NextResponse.json(data, {
    headers: corsHeaders()
  });
}

export async function POST(request) {
  try {
    const body = await request.json();
    const current = readData();

    const updated = {
      ...current,
      ...body,
      updatedAt: new Date().toISOString()
    };

    writeData(updated);

    return NextResponse.json(
      { success: true, message: "Site data updated successfully", data: updated },
      { headers: corsHeaders() }
    );
  } catch (e) {
    return NextResponse.json(
      { success: false, error: e.message },
      { status: 500, headers: corsHeaders() }
    );
  }
}

