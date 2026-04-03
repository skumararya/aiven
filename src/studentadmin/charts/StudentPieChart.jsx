import React, { useLayoutEffect, useRef } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5percent from "@amcharts/amcharts5/percent";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

const StudentPieChart = () => {
  const chartRef = useRef(null);

  useLayoutEffect(() => {
    let root = am5.Root.new(chartRef.current);

    root.setThemes([am5themes_Animated.new(root)]);

    let container = root.container.children.push(
      am5.Container.new(root, {
        layout: root.horizontalLayout,
        width: am5.p100,
        height: am5.p100
      })
    );

    // Chart
    let chart = container.children.push(
      am5percent.PieChart.new(root, {
        innerRadius: am5.percent(70),
        layout: root.verticalLayout
      })
    );

    // ✅ FIXED DATA (color as am5.color)
    let data = [
      { category: "Robotics", value: 80, color: am5.color("#4046E0") },
      { category: "Coding", value: 20, color: am5.color("#4EB8EC") },
      { category: "AI Fundamentals", value: 15, color: am5.color("#33C4BD") },
      { category: "Computational Thinking", value: 24, color: am5.color("#F5508C") }
    ];

    // ✅ Series with fillField
    let series = chart.series.push(
      am5percent.PieSeries.new(root, {
        valueField: "value",
        categoryField: "category",
        alignLabels: false
      })
    );

    series.data.setAll(data);

    // ✅ Styling with fillField
    series.slices.template.setAll({
      strokeWidth: 5,
      stroke: am5.color("#ffffff"),
      cornerRadius: 10,
      fillField: "color", // ⭐ IMPORTANT FIX
      tooltip: am5.Tooltip.new(root, {
        labelText: "{category}: {value}"
      })
    });

    // Hide labels & ticks
    series.labels.template.set("forceHidden", true);
    series.ticks.template.set("forceHidden", true);

    // Center total
    const total = data.reduce((sum, item) => sum + item.value, 0);

    chart.seriesContainer.children.push(
      am5.Label.new(root, {
        text: `[fontSize:14]${total}[/]\nTotal`,
        textAlign: "center",
        centerX: am5.percent(50),
        centerY: am5.percent(50),
        fill: am5.color("#000"),
        fontWeight: "600"
      })
    );

    // Legend
    let legend = container.children.push(
      am5.Legend.new(root, {
        layout: root.verticalLayout,
        centerY: am5.percent(50),
        y: am5.percent(50),
        marginLeft: 20
      })
    );

    legend.data.setAll(series.dataItems);

    // Animation
    series.appear(1000, 100);

    return () => {
      root.dispose();
    };
  }, []);

  return <div ref={chartRef} style={{ width: "100%", height: "400px" }} />;
};

export default StudentPieChart;