export default function Lists() {
  const lists = Array.from(Array(10).keys());
  return (
    <div>
      <ul>
        {lists.map((item, index) => <li key={index}>{index},</li>)}
      </ul>
    </div>
  )

}