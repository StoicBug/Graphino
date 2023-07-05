const HowToUse = () => {
  return (
    <div className="py-10">
      <h2 className="text-secondary text-lg tracking-widest uppercase text-center">
        - Explore Graphino -
      </h2>
      <h1 className="font-semibold text-5xl text-center pt-2 pb-10">
        How To Use
      </h1>
      <div className="flex items-center gap-10">
        <img src="https://placehold.co/605x344" alt="" />
        <div>
          <p className="text-primary tracking-widest uppercase">
            Visualisation
          </p>
          <h3 className="text-3xl font-semibold py-1">
            Visualize algorithms step by step
          </h3>
          <p className="max-w-3xl py-4">
            Visualizing algorithms step by step is an effective way to learn how
            they work. Breaking down each step into manageable pieces and
            visualizing them can deepen your understanding of how the algorithm
            functions and why it produces the results it does.
          </p>
          <button className="bg-primary rounded-lg py-2 px-6 text-white font-medium mt-2">
            Try it now
          </button>
        </div>
      </div>
      <div className="flex items-center gap-10 mt-14">
        <div>
          <p className="text-primary tracking-widest uppercase">Playground</p>
          <h3 className="text-3xl font-semibold py-1">
            Explore Graphs by adding nodes and edges
          </h3>
          <p className="max-w-3xl py-4">
            Exploring graphs by adding nodes and edges can be a fun and
            interactive way to deepen your understanding of graph theory. By
            visually representing the connections between nodes, you can gain
            insights into the structure and behavior of the graph.
          </p>
          <button className="bg-primary rounded-lg py-2 px-6 text-white font-medium mt-2">
            Try it now
          </button>
        </div>
        <img src="https://placehold.co/605x344" alt="" />
      </div>
    </div>
  );
};

export default HowToUse;
