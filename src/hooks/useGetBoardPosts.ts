import { getBoardPosts } from '@/apis/getBoardPosts';
import { getBoardPostsProps } from '@/types/apis/get';
import { PetitionPostsTopLikedResponse } from '@/types/getPetitionTopLiked';
import { useQuery } from '@tanstack/react-query';

export const useGetBoardPosts = ({ page, take, groupCode, memberCode, category, boardCode }: getBoardPostsProps) => {
  return useQuery<PetitionPostsTopLikedResponse>({
    queryKey: ['get-board-boardCode-posts', page, take, groupCode, memberCode, category, boardCode],
    queryFn: () =>
      getBoardPosts({
        page,
        take,
        groupCode,
        memberCode,
        category,
        boardCode,
      }),
  });
};
