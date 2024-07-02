const Item = ({ item }: { item: any }) => {
  return (
    <div className="items-center justify-center">
      <div className="font-bold text-center mt-2">{item.title}</div>
      <img src={item.images} alt={item.title} className="h-full mx-auto" />
    </div>
  );
};

export default Item;
