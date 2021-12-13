import React from 'react';
// @ts-ignore
import { templateComponents } from 'src/components/Dashboard/dashboard.config';

export interface WidgetProps {
	content: any;
	className?: string;
}

export const Widget = ({content, className}: WidgetProps) => {
  const WidgetComponent = templateComponents[content.config.template];
  const customClass = className && `${className}`;
  const widgetPosition = content.config.position.toLowerCase();

	return (
		<div className={`${customClass} widget widget--${widgetPosition}`}>
      <WidgetComponent content={content} />
		</div>
	);
};
