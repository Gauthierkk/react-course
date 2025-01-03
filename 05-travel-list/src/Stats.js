export default function Stats({ items }) {
  const totalItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const percentage = Math.round((packedItems / totalItems) * 100);

  return (
    <footer className="stats">
      <em>
        You have {packedItems} / {totalItems} items on your list, and you've
        packed {percentage}%
      </em>
    </footer>
  );
}
