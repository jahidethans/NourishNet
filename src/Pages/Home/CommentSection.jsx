
const CommentSection = () => {

    
        // You can replace this with actual comments data
        const comments = [
          'Great initiative!',
          'I love this community!',
          'Amazing work!',
          'Keep it up! Cannot believe how less the wastes is now',
        ];

    return (
        <section className="flex items-center justify-around bg-gray-400 p-8 my-16">
        <div className="max-w-md">
          <h2 className="text-3xl font-bold mb-4">Check People's Opinion</h2>
          <p className="text-gray-700">
            Here you can find what others are saying about our community and the
            impact it's making.
          </p>
        </div>
        <div className="flex-1 ml-8">
          {comments.map((comment, index) => (
            <div
              key={index}
              className="bg-white hover:bg-gray-300 p-4 mb-4 border rounded-md shadow-md"
            >
              {comment}
            </div>
          ))}
        </div>
      </section>
    );
};

export default CommentSection;