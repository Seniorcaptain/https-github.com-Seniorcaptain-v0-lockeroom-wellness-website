import type { MetadataRoute } from "next"

const siteUrl = "https://www.lockeroomwellness.ke"

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/services",
    "/professionals",
    "/pricing",
    "/testimonials",
    "/contact",
    "/emergency",
    "/book",
    "/privacy",
    "/terms",
  ]

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }))
}
