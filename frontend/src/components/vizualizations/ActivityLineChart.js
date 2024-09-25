import * as d3 from 'd3';
import React, { useRef, useEffect } from 'react';

export default function ActivityLineChart() {
  const svgRef = useRef(null);
  useEffect(() => {
    if (svgRef.current) {
      const svg = d3.select(svgRef.current);

      svg.append('circle')
        .attr('cx', 50)
        .attr('cy', 50)
        .attr('r', 25)
        .attr('fill', 'blue');
    }
  }, []);

  return (
    <svg ref={svgRef} width={200} height={200} />
  );

}