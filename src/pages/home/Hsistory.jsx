import React from "react";

export default function Hsistory() {
  return (
    <div className="py-10">
      <h2 className="text-secondary text-lg tracking-widest uppercase text-center">
        - the Mysteries of Graphs -
      </h2>
      <h1 className="font-semibold text-5xl text-center pt-2 pb-10">
        A Brief Journey Through History and Theory{" "}
      </h1>
      <div className="grid grid-cols-2 gap-3">
        <img src="https://placehold.co/805x344" alt="" />
        <p className="text-lg">
          Graphs, those fascinating structures of nodes and edges, have a rich
          history rooted in the puzzle-solving genius of Leonhard Euler. In the
          18th century, Euler pondered over{" "}
          <a
            href="https://en.wikipedia.org/wiki/Seven_Bridges_of_K%C3%B6nigsberg"
            target="_blank"
            className="text-primary underline hover:cursor-pointer hover:text-secondary"
          >
            the Seven Bridges of Königsberg problem
          </a>
          , igniting the birth of graph theory. His work laid the foundation for
          this captivating field, introducing the concept of graphs and
          developing fundamental principles and theorems.
        </p>
        <img src="https://placehold.co/805x444" alt="" />
        <p className="text-lg">
          Fast forward to the 21st century, where graph algorithms have become
          indispensable in a wide range of applications. From social media
          analysis to transportation planning, these algorithms allow us to
          extract insights, find optimal paths, and detect patterns within
          complex networks. Traversing graphs with depth-first search,
          breadth-first search, or uncovering the shortest paths with Dijkstra's
          algorithm, we unlock a world of problem-solving and optimization.
          <br />
          <br />
          So, join us on this thrilling odyssey through the realms of graph
          algorithms. Unveil the hidden connections and stories within every
          edge and node. From Euler's humble beginnings to the powerful
          algorithms of today, let's explore the wonders of graphs and unleash
          their endless possibilities together.
          <br />
          <button className="bg-primary rounded-lg mt-8 px-6 text-white font-medium py-2">
            Start Learning
          </button>
        </p>
      </div>
    </div>
  );
}
