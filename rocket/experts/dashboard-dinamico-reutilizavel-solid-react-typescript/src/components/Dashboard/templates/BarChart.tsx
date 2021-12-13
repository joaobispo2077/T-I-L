// @ts-ignore
import {Chart, Layer, Bars, Ticks} from 'rumble-charts';
import { WidgetComponentProps } from '../dashboard.model';

export const BarChartTemplate = ({ content }: WidgetComponentProps) => {
  const { title, items, current } = content.data;

  return (
    <div className="widget__chart">
      <h2 className="widget__title">{title}</h2>
      <Chart width={800} height={250} series={items} minY={0}>
        <Layer width="80%" height="90%" position="bottom center">
          <Ticks
            axis="y"
            lineLength="100%"
            lineStyle={{stroke: '#D1F2EB'}}
            labelStyle={{textAnchor: 'end', dominantBaseline: 'middle', fill: '#D1F2EB'}}
            labelAttributes={{x: -5, y: -6}}
            labelFormat={(label: number) => label}
          />
          <Bars innerPadding="5%" colors={['#148F77']} />
        </Layer>
      </Chart>
      <p className="widget__info">{current}</p>
    </div>
  ); 
}
