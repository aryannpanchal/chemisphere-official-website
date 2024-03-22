// ./app/page.tsx

import { SanityDocument } from "next-sanity";

import Posts from "../../components/Posts"
import NavbarSection from "../../components/NavbarSection"
import { loadQuery } from "@/sanity/lib/store";
import { POSTS_QUERY } from "@/sanity/lib/queries";

export default async function Page() {
  const initial = await loadQuery<SanityDocument[]>(POSTS_QUERY);

  return(
    <>
    <NavbarSection />
      <Posts posts={initial.data} />

    </>
  )
}