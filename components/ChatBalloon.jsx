{
	data.sort(compare).map((item) => {
		return (
			<div
				key={item.user_id}
				className={`rounded-2xl mx-4 py-1 px-5 mb-1 ${
					item.user_id === 1 ? "bg-blue-300 self-start" : "bg-red-500 self-end"
				}`}
			>
				<div className="rounded-full flex flex-row">{item.name}</div>
				<div>{item.text}</div>
			</div>
		);
	});
}
