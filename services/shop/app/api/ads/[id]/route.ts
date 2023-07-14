/*
 Copyright 2022 Google LLC

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

      https://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */
import { NextResponse } from "next/server"
import { fileURLToPath } from "url"
import { readFile } from "fs/promises"

export async function GET(req: Request, { params }: { params: { id: string } }) {
  const id = params.id
  const img = `../../../../public/image/svg/emoji_u${id}.svg`
  const path = fileURLToPath(new URL(img, import.meta.url))
  const blob = await readFile(path)
  const res = new NextResponse(blob)
  res.headers.set("Content-Type", "image/svg+xml")
  return res
}