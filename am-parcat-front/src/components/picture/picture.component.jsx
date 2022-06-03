const Picture = (picture) => {
    console.log(picture.picture)
	const { name, url } = picture.picture;
	return (
		<div>
			<h1>{name}</h1>
			<img src={url} alt={picture.name} />
		</div>
	);
};
export default Picture;
