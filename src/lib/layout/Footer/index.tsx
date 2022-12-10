import { Divider, Grid, Link, Stack, Text } from "@chakra-ui/react";

import SpotifyListening from "lib/components/common/SpotifyListening";
import { EVENT_TYPE_LINK } from "lib/constants/tracking";
import { trackEvent } from "lib/utils/trackEvent";

import { links } from "./constants";
import FooterLink from "./FooterLink";

const Footer = () => {
  const handleClickFooterLink = (label: string) => () => {
    trackEvent({
      eventName: `Footer Link: ${label}`,
      eventData: { type: EVENT_TYPE_LINK },
    });
  };

  return (
    <Stack as="footer" layerStyle="layoutBlock" spacing={8}>
      <Divider />
      <SpotifyListening />

      <Grid
        display={{ base: "grid", md: "flex" }}
        templateColumns={{
          base: "repeat(2, 1fr)",
          md: `repeat(${links.length <= 4 ? links.length : 4}, 1fr)`,
        }}
        gap={{ base: 4, md: 6 }}
      >
        {links.map((link) => (
          <FooterLink
            {...link}
            onClick={handleClickFooterLink(link.label)}
            key={link.label}
          />
        ))}
      </Grid>
      <Text fontSize={["xs", "sm"]} color="gray">
        &copy; 2022 - {new Date().getFullYear()}{" "}
        <Link
          href="https://www.codenime.xyz"
          target="_blank"
          rel="noopener noreferrer"
        >
          codenime
        </Link>
      </Text>
      <Text fontSize={["xs", "sm"]} color="gray">
        Tema di buat oleh {" "} 
        <Link
          href="https://www.sznm.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          sznm.dev
        </Link>
      </Text>
    </Stack>
  );
};

export default Footer;
