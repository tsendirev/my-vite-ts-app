import { useQuery } from '@tanstack/react-query'
import { getImages } from "../api/images";

export function ImagesPage_TST() {
    const { data, refetch, isLoading, isFetching } = useQuery({
        queryKey: ['images'],
        queryFn: getImages,
    });
    const loading = isFetching || isLoading;

    return (
        <div>
            <div>
                <h1>Images list</h1>
            </div>
            <button
                type="button"
                className="counter"
                onClick={() => refetch()}
            >
                Update images list
            </button>
            <div className='usersContainer'>
                {loading && <h1>Images list loading...</h1>}
                {!loading && data?.data.map((image) => (
                    <div key={image.id}>
                        <p>{image.name ?? `Image ${image.id}`}</p>
                        {image.url && <img src={image.url} alt={image.name} width={150} />}
                    </div>
                ))}
            </div>
        </div>
    );
}