import * as d3 from 'd3';
import React, { useRef, useEffect } from 'react';

export default function ActivityLineChart(props) {
  const svgRef = useRef(null);
  const data = props.data;
  const width = 600;
  const height = 400;
  const marginTop = 20;
  const marginRight = 30;
  const marginBottom = 30;
  const marginLeft = 40;

  useEffect(() => {
    if (svgRef.current) {
      const svg = d3.select(svgRef.current);
      const dataExtent = d3.extent(data.map((d) => new Date(d.start_date)));
      const formatTime = d3.timeFormat("%d %b");
      const speedExtent = d3.extent(data.map((d) => d.average_speed));

      // declare the x (horizontal position) scale
      const xScale = d3.scaleTime()
        .domain(dataExtent)
        .range([marginLeft, width - marginRight]);

      // declare the y (vertical position) scale
      const yScale = d3.scaleLinear().domain(speedExtent).range([height - marginBottom, marginTop]);

      // define svg width and height
      svg
        .attr("width", width)
        .attr("height", height)
        .attr("viewBox", [0, 0, width, height])
        .attr("style", "max-width: 100%; height: auto; height: intrinsic;");

      // declare the line generator with a smoother curve
      const line = d3.line()
        .x(d => xScale(new Date(d.start_date)))
        .y(d => yScale(d.average_speed))
        .curve(d3.curveMonotoneX);

      // add x axis
      svg.append("g")
        .attr("transform", `translate(0,${height - marginBottom})`)
        .call(d3.axisBottom(xScale).ticks(10).tickFormat(formatTime).tickSizeOuter(0));

      // add Y axis
      svg.append("g")
        .attr("transform", `translate(${marginLeft},0)`)
        .call(d3.axisLeft(yScale).ticks(height / 40).tickSizeOuter(0));

      // Append a path for the line
      const linePath = svg.append("path")
        .datum(data)
        .attr("fill", "none")
        .attr("stroke", "#5e35b1")
        .attr("stroke-width", 2)
        .attr("d", line(data))

      // Add circles at data points
      svg.selectAll("circle")
        .data(data)
        .enter()
        .append("circle")
        .attr("cx", d => xScale(new Date(d.start_date)))
        .attr("cy", d => yScale(d.average_speed))
        .attr("r", 4)
        .attr("fill", "#311b92")
        .attr("stroke", "white")
        .attr("stroke-width", 1.5);
    }
  }, [data]);

  return (
    <div className='flex justify-center items-center h-full'>
      <svg ref={svgRef} className='activityChart' width={width} height={height} />
    </div>
  );
}
