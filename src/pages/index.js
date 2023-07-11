import { list2 } from "@/assets/cards-list";
import Cards from "@/components/Cards/";
import Filter from "@/components/Filter";
import Header from "@/components/Header"
import { useState } from "react"


export default function Home() {
  const [selectedFilter, setSelectedFilter] = useState(0);

  return (
    <>
    <main
    >
      <Header />
      <Filter
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
      />

      <Cards list={list2} selectedCategory={selectedFilter} />
    </main>

    </>
  )
}
