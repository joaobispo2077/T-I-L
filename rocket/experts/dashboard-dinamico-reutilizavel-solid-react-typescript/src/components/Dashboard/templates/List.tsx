import { WidgetComponentProps } from "../dashboard.model";

export const ListTemplate = ({ content }: WidgetComponentProps) => {
  const { items, title} = content.data;
  return (
    <div className="widget__list">
      <h2 className="widget__title">{title}</h2>
      <ul className="widget__ul">
        {items?.map((item: any) => (
          <li className="widget__li">{`${item.title} - ${item.value}`}</li>
        ))}
      </ul>
    </div>
  );
}
