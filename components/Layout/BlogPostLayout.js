import {
  Layout,
  UL,
  OL,
  LI,
  H1,
  H2,
  H3,
  H4,
  P,
  BlockQuote,
  Divider,
} from "../../components";

export const BlogPostLayout = props => (
  <Layout>
    <main>
      <article className="mw7">
        <div className="mb4">
          <H1>Starting with NixOps (and thus Nix and NixOS)</H1>
          <Divider />
        </div>

        <H2>Introduction</H2>

        <P>
          Given the three above derivations, it is possible to generate the
          appropriate qemu-kvm invocation as a script, runvm. runvm is the main
          entry point to start playing and understanding not-os. Follow the
          link, and enjoy!
        </P>

        <UL>
          <LI>a kernel (config.system.build.kernel)</LI>
          <LI>an initrd (config.system.build.initialRamdisk)</LI>
          <LI>a rootfs (config.system.build.squashfs)</LI>
        </UL>

        <P>
          This is a project of Michael Bishop (cleverca22 on GitHub, clever on
          IRC). I modified it just a bit to make it possible to generate this
          documentation.
        </P>

        <H3>Sub-points</H3>

        <OL>
          <LI>Item one</LI>
          <LI>Item two</LI>
          <LI>Item three</LI>
        </OL>

        <H4>Some quotes</H4>
        <BlockQuote>
          To follow along, you can clone the Git repository and run each
          nix-build command as they appear at the top of each page.
        </BlockQuote>

        <H3>Ending points</H3>

        <P>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </P>
      </article>
    </main>
  </Layout>
);
