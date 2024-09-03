import { usePatchBoardPosts } from '@/hooks/usePatchBoardPosts';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useGetBoardDetail } from '@/hooks/useGetBoardDetail';
import { useDelBoardFiles } from '@/hooks/useDelBoardFiles';
import { usePostBoardFiles } from '@/hooks/usePostBoardFiles';
import { handleFileLists } from '@/pages/audit/auditEdit/utils/fileHandler';

export function usePartnershipPatch() {
  const location = useLocation();
  const navigate = useNavigate();

  const postId: number = location.state?.postId;
  const boardCode: string = '제휴게시판';
  const { data: resp } = useGetBoardDetail({ boardCode, postId });
  const postDetail = resp?.data.postDetailResDto;

  const [title, setTitle] = useState<string>(postDetail?.title ?? '');
  const [category, setCategory] = useState<string>(postDetail?.categoryName ?? '');
  const [content, setContent] = useState<string>(postDetail?.content ?? '');
  const [imageList] = useState<string[]>(postDetail?.imageList ?? []);
  const [fileList, setFileList] = useState<string[]>(postDetail?.fileList ?? []);
  const [newFiles, setNewFiles] = useState<File[]>([]);
  const [deletedFiles, setDeletedFiles] = useState<string[]>([]);
  const [thumbnailImage, setThumbnailImage] = useState<string>(postDetail?.imageList[0] ?? '');

  const { mutateAsync: patchPost, isLoading }: any = usePatchBoardPosts();
  const { mutateAsync: deleteFiles } = useDelBoardFiles();
  const { mutateAsync: uploadFiles } = usePostBoardFiles();

  const handleTitleChange = (newTitle: string) => {
    setTitle(newTitle);
  };

  const handleCategoryChange = (newCategory: string) => {
    setCategory(newCategory);
  };

  const handleContentChange = (newContent: string) => {
    setContent(newContent);
  };

  const handleFileDelete = (fileUrl: string) => {
    setFileList((prevList) => prevList.filter((file) => file !== fileUrl));
    setDeletedFiles((prevDeleted) => [...prevDeleted, fileUrl]);
  };

  const handleSubmit = async () => {
    try {
      if (deletedFiles.length > 0) {
        await deleteFiles({ boardCode, fileUrls: deletedFiles });
      }

      let uploadedFileList: number[] = [];
      let uploadedThumbnail = thumbnailImage;

      if (newFiles.length > 0) {
        const uploadResponse = await uploadFiles({
          boardCode,
          files: newFiles,
        });

        const { postFiles } = uploadResponse.data.data;

        uploadedFileList = handleFileLists(postFiles);
      }

      await patchPost({
        boardCode,
        posts: {
          title,
          content,
          categoryCode: category,
          thumbnailImage: uploadedThumbnail,
          postFileList: uploadedFileList.length > 0 ? uploadedFileList : [0],
        },
        postId,
      });

      navigate('/homepage-frontend/partnership');
    } catch (e) {
      console.error(e);
    }
  };

  return {
    postId,
    title,
    category,
    content,
    thumbnailImage,
    imageList,
    handleTitleChange,
    handleCategoryChange,
    handleContentChange,
    setThumbnailImage,
    handleSubmit,
    isLoading,
    fileList,
    setNewFiles,
    handleFileDelete,
  };
}