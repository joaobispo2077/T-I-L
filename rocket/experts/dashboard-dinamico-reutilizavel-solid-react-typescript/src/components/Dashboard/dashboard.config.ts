import { BarChartTemplate } from "src/components/Dashboard/templates/BarChart";
import { BlockTemplate } from "src/components/Dashboard/templates/Block";
import { ListTemplate } from "src/components/Dashboard/templates/List";
import { WidgetTemplateConfig } from "src/components/Dashboard/dashboard.model";

export type WidgetType = "COMPARISON" | "METRIC" | "FUNNEL";

export type WidgetPosition = "FULL" | "HALF" | "QUARTER";

export type WidgetTemplate = "LIST" | "BAR_CHART" | "BLOCK";

export const templateComponents: WidgetTemplateConfig = {
  BLOCK: BlockTemplate,
  LIST: ListTemplate,
  BAR_CHART: BarChartTemplate,
};
