import { Box, Heading, Text, Flex, AspectRatio, Image } from "@chakra-ui/react";
import type { Blog } from "contentlayer/generated";
import Link from "next/link";

import type { MotionBoxProps } from "lib/components/motion/MotionBox";
import MotionBox from "lib/components/motion/MotionBox";
import Twemoji from "lib/components/Twemoji";
import { EVENT_TYPE_NAVIGATE } from "lib/constants/tracking";
import { dateFormatLong } from "lib/utils/dateFormat";
import { trackEvent } from "lib/utils/trackEvent";
import { unsplashImg } from "lib/utils/unsplashImg";

type BlogPostPreviewProps = {
  postData: Blog;
  wrapperProps?: MotionBoxProps;
};

const BlogPostPreview = ({ postData, wrapperProps }: BlogPostPreviewProps) => {
  const handleClickBlogPost = () => {
    trackEvent({
      eventName: `Blog Post: ${postData.title}`,
      eventData: { type: EVENT_TYPE_NAVIGATE },
    });
  };

  return (
    <MotionBox {...wrapperProps}>
      <Box
        width="100%"
        borderWidth="2px"
        borderRadius={12}
        p={5}
        transition="0.2s ease-out"
        _hover={{
          transform: "scale(1.03, 1.03)",
        }}
      >
        <Flex
          as={Link}
          href={`/blog/${postData.id}`}
          onClick={handleClickBlogPost}
          flexWrap="wrap"
          alignItems="center"
          width="100%"
        >
          <AspectRatio
            width="full"
            ratio={2 / 1}
            marginBottom={4}
            boxShadow="lg"
            borderRadius={{ base: 12, md: 24 }}
          >
            <Image
              src={unsplashImg(postData.cover)}
              fit="cover"
              borderRadius={10}
            />
          </AspectRatio>
          
          <Box flexBasis={["90%"]} paddingLeft={[11, 22]}>
            <Heading size="lg" marginBottom={2}>
              {postData.title}
            </Heading>
            <Text fontSize="sm">
              {dateFormatLong(postData.date)} • {postData.readTime?.text}
            </Text>
          </Box>
        </Flex>
      </Box>
    </MotionBox>
  );
};

export default BlogPostPreview;
