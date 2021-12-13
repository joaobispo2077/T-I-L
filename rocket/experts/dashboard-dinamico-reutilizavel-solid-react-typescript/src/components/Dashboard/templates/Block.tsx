import { WidgetComponentProps } from "../dashboard.model"

export const BlockTemplate = ({ content }: WidgetComponentProps) => {
  const { value, prev, current, title } = content.data;

  const rangePreviousToCurrentText = prev ? `${prev} - ${current}` : current;

  return (
    <div className="widget__block">
      <h2 className="widget__title">{title}</h2>
      <p className="widget__value">{value}</p>
      <p className="widget__info">{rangePreviousToCurrentText}</p>
    </div>
  )
}
