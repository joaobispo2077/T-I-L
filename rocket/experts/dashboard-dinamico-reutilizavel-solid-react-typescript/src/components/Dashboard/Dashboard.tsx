import React from 'react';
import { widgets } from 'src/mocks/dashboard.data';
import { Widget } from 'src/components/Dashboard/Widget';

import './styles/main.scss';

export const Dashboard = () => {
	return (
		<div className="dashboard">
      {widgets.map((widget: any, index) => (
        <Widget key={index} content={widget} 	className="dashboard__widget" />
      ))}
			{/* <Widget
				data={content.widgets[2]}
				type="COMPARISON"
				position="FULL"
				template="BAR CHART"
				className="dashboard__widget dashboard__widget--full"
			/>
			<Widget
				data={content.widgets[1]}
				type="METRIC"
				position="HALF"
				template="LIST"
				className="dashboard__widget dashboard__widget--half"
			/>
			<Widget
				data={content.widgets[0]}
				type="COMPARISON"
				position="QUARTER"
				template="BLOCK"
				className="dashboard__widget dashboard__widget--quarter"
			/> */}
		</div>
	);
};
