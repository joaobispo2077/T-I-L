import { BarChartTemplate } from "src/components/Dashboard/templates/BarChart";
import { BlockTemplate } from "src/components/Dashboard/templates/Block";
import { ListTemplate } from "src/components/Dashboard/templates/List";
import { WidgetTemplateConfig } from "src/components/Dashboard/dashboard.model";

export const templateComponents: WidgetTemplateConfig = {
  BLOCK: BlockTemplate,
  LIST: ListTemplate,
  BAR_CHART: BarChartTemplate,
};
