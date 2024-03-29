import { AiFillDislike, AiFillLike } from "react-icons/ai";
import { IoMdArrowDropdown } from "react-icons/io";

const Comments = ({ comment }) => {
  // console.log(comment);

  return (
    <div className="comment mt-2">
      {/* kanal resmi */}
      <div>
        <img
          className="rounded-full w-12 h-12"
          src={comment.authorThumbnail[0].url}
          alt=""
        />
      </div>

      {/* kanal yorumları */}
      <div>
        <div className="flex gap-2">
          <p className="font-bold">{comment.authorText}</p>
          <p className="text-[#a6a2a2] text-sm">{comment.publishedTimeText}</p>
        </div>

        <div className="my-1">{comment.textDisplay}</div>

        <div className="flex gap-4 text-sm cursor-pointer">
          <div className="flex items-center gap-2">
            <AiFillLike />
            <p className="text-[#c7c2c2]">{comment.likesCount}</p>
          </div>

          <div className="flex items-center gap-6">
            <AiFillDislike />
            <p className="hover:bg-[#363535] rounded-full p-2">Yanıtla</p>
          </div>
        </div>

        <span className="inline-flex items-center gap-2 py-1 px-2 rounded-full cursor-pointer text-[#4198e4] hover:bg-[#243852]">
          {comment.replyCount !== 0 && <IoMdArrowDropdown />}{" "}
          <p>{comment.replyCount === 0 ? "" : comment.replyCount + " yanıt"}</p>
        </span>
      </div>
    </div>
  );
};

export default Comments;
