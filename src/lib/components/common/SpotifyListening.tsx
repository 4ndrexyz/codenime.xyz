import {
  Box,
  Flex,
  Icon,
  Image,
  Link,
  Skeleton,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import { FaSpotify } from "react-icons/fa";

import { useNowPlayingData } from "lib/services/spotify/user/now-playing";

const SpotifyListening = () => {
  const { data, isLoading } = useNowPlayingData();

  if (isLoading) {
    return <Skeleton maxWidth={300} height={20} borderRadius={12} />;
  }

  return (
      <Tooltip
        label="Currently playing on my Spotify"
        isDisabled={!data?.isPlaying}
      >
        <Flex
          as={data?.trackUrl ? Link : undefined}
          href={data?.trackUrl}
          target="_blank"
          borderRadius={12}
          maxWidth="auto"
          marginX="auto"
          alignItems="center"
          gridGap={2}
          height={20}
          fontFamily="heading"
          borderWidth="1px"
        >
          <Icon as={FaSpotify} color="green.400" boxSize={8} fontSize="2xl" ml={4} mr={4}/>
          {data?.albumArtUrl && (
            <Image src={data.albumArtUrl} width={16} borderRadius={8} />
          )}
          <Box mr={5}>
            <Text
              fontWeight="extrabold"
              fontSize="sm"
              color={data?.isPlaying ? undefined : "gray"}
            >
              {data?.trackTitle ?? "Not Playing"}
            </Text>
            {data?.artist && (
              <Text fontSize="xs" color="gray.500">
                {data.artist}
              </Text>
            )}
          </Box>
        </Flex>
      </Tooltip>
  );
};

export default SpotifyListening;
