import PropTypes from "prop-types";
import merge from "lodash/merge";
import ReactApexChart from "react-apexcharts";
import { Box, Card, CardHeader } from "@mui/material";
import BaseOptionChart from "../../chart/BaseOptionChart";
import { fNumber } from "../../../store/formatNumber";
// components

// ----------------------------------------------------------------------

AppConversionRates.propTypes = {
  title: PropTypes.string,
  subheader: PropTypes.string,
  chartData: PropTypes.array.isRequired,
};

export default function AppConversionRates({
  title,
  subheader,
  chartData,
  ...other
}) {
  const chartLabels = chartData.map((i) => i.label);

  const chartSeries = chartData.map((i) => i.value);

  const chartOptions = merge(BaseOptionChart(), {
    tooltip: {
      marker: { show: false },
      y: {
        formatter: (seriesName) => fNumber(seriesName),
        title: {
          formatter: () => "",
        },
      },
    },
    plotOptions: {
      bar: { horizontal: true, barHeight: "28%", borderRadius: 2 },
    },
    xaxis: {
      categories: chartLabels,
    },
  });

  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} />

      <Box sx={{ mx: 3 }} dir="ltr">
        <ReactApexChart
          type="bar"
          series={[{ data: chartSeries }]}
          options={chartOptions}
          height={364}
        />
      </Box>
    </Card>
  );
}
