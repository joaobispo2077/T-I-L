import React from 'react';
import { Widget } from 'src/components/Dashboard/Widget';

import './styles/main.scss';
import * as Model from './dashboard.model';

export interface DashboardProps {
  widgets: Model.Widget[];
  title: string;
}

export const Dashboard = (
  { widgets, title }: DashboardProps
) => {

	return (
		<div className="dashboard">
      <h1>{title}</h1>
      {widgets.map((widget: any, index) => (
        <Widget key={index} content={widget} 	className="dashboard__widget" />
      ))}
		</div>
	);
};
