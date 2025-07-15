/* eslint-disable */
/* This is an auto-generated file for building the project */

import { Fragment, useState } from "react";
import { useResource, useVariableState } from "@webstudio-is/react-sdk/runtime";
import { Box, Fragment as Fragment_1, Heading, Text, Link, Body, Image, HtmlEmbed, Button, Slot, Form, Label, Input, Textarea } from "@webstudio-is/sdk-components-react";
import { Dialog, DialogTrigger, DialogOverlay, DialogContent, DialogClose } from "@webstudio-is/sdk-components-react-radix";

export const projectId = "fd3eec37-dc19-49f8-8c38-1b3480b70545";

export const lastPublished = "2025-07-13T08:17:31.514Z";

export const siteName = undefined;

export const breakpoints = [
  {"id":"xJeou5xD-ZPSvh_xQmigm"},
  {"id":"q27LwumJRpeWr-2KevzAM","maxWidth":991},
  {"id":"vJ6Hj6-9uawC16QIPkB7M","maxWidth":767},
  {"id":"NIuo9sUEVMrgoahxXlZFz","maxWidth":479}
];

export const favIconAsset: string | undefined = undefined;

export const pageFontAssets: string[] = [
  "InstrumentSans-VariableFont_wdth_wght_o3etf9mcJeUAJ0jUkHwMF.ttf"
];

export const pageBackgroundImageAssets: string[] = [
  "Portfolio__Icon_VC6lMDbymwZEJV7H7JBQ3.svg",
  "Contact_Icon_White_67_HWShh4J6gTKgI61jvg.svg"
];

const Page = (_props: { system: any }) => {
  let [sheetOpen, set$sheetOpen] = useVariableState<any>(false);
  let [formState, set$formState] = useVariableState<any>("initial");
  return (
    <Body className="w-body">
      <Box className="w-box c11lapjv c1tmx3h cjgcbjj cejhttc chvjn1z c7p2prc czw8boz">
        <Slot>
          <Fragment_1>
            <Box className="w-box c1sotb2x c1qk1h6g c1osc9n6 c1awg9k3 cyw754m">
              <Box className="w-box c8nk80o c13x75cb cpeqh71 cqq2eg1 c18xl9bf cx9qu6t c1xrbobn ckydxof cunu00i cwy7e20 ctskr9n">
                <Link href="/" target="_self" prefetch="intent" className="w-link c1o8hml3 cejhttc c1ad1g5y c15lgcvk c1f6jgc2 c1qo8o4l clu3ty5">
                  {"Danh Mục Cá Nhân"}
                </Link>
                <Box className="w-box c8nk80o c1ogvzo5 cqq2eg1 c18xl9bf c1fpug7s">
                  <Link href="/about" target="_self" prefetch="intent" className="w-link c1o8hml3 cejhttc c1ad1g5y c15lgcvk c1f6jgc2 c1qo8o4l c2lsnmx clu3ty5">
                    {"Giới Thiệu"}
                  </Link>
                  <Link href="/contact" target="_self" prefetch="intent" className="w-link cejhttc c1o8hml3 c1ad1g5y c15lgcvk c1f6jgc2 c1qo8o4l c2lsnmx clu3ty5">
                    {"Liên Hệ"}
                  </Link>
                </Box>
                <Dialog open={sheetOpen} onOpenChange={(open: any) => {
                  sheetOpen = open;
                  set$sheetOpen(sheetOpen);
                }}>
                  <DialogTrigger>
                    <Button className="w-button c13pijs9 c1scknq9 c13x75cb c7d3819 cenum42 cnewxw7 ch5h01i c1b9bckd ck9ixjl cf0pfnd c1ad1g5y cz2nl1p c1dt4ltr cn250fx c1busqa9 cgt1h5s c2dclm4 c12hgpsa c122p7hh cmxx3nh c1mxk2vx ccjcf51">
                      <HtmlEmbed code='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" fill="currentColor" width="100%" height="100%" style="display: block;"><path fill-rule="evenodd" d="M2 5.998a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Zm0 5.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Zm0 5.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd"/></svg>' className="w-html-embed" />
                    </Button>
                  </DialogTrigger>
                  <DialogOverlay className="w-dialog-overlay c1sotb2x c1osc9n6 c1qk1h6g c1t7dt52 c68fyns c1b35ja6 c1isnxag cg4lnn c8nk80o c14pfhm5 ci9ibf8 cphaibv">
                    <DialogContent className="w-dialog-content c3lk5pa c8nk80o c14pfhm5 c1fk1fd2 cnmj2dw c1ooh0qz c1b35ja6 cvgy7pi c1faj09k c7p2prc c70woon culjnom c115i0ts cpjawy7">
                      <Link href="/about" target="_self" prefetch="intent" className="w-link c1o8hml3 cejhttc c1ad1g5y c15lgcvk c1f6jgc2 c1qo8o4l c2lsnmx clu3ty5">
                        {"Giới Thiệu"}
                      </Link>
                      <Link href="/contact" target="_self" prefetch="intent" className="w-link cejhttc c1o8hml3 c1ad1g5y c15lgcvk c1f6jgc2 c1qo8o4l c2lsnmx clu3ty5">
                        {"Liên Hệ"}
                      </Link>
                      <Box tabIndex={0} className="w-box" />
                      <DialogClose className="w-close-button c4atwyc c1d27264 c11ay8lg c1uv3blp c1akwp0s cuc67wf c6jpp3q c1qk5zit c8nk80o c13x75cb c7d3819 c1jo05lw cmi3q3b c1scknq9 chbfy8t ch1im86 cn250fx c1drutn0 cz7w4uz">
                        <HtmlEmbed code='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" width="100%" height="100%" style="display: block;"><path fill-rule="evenodd" d="M13.566 2.434a.8.8 0 0 1 0 1.132L9.13 8l4.435 4.434a.8.8 0 0 1-1.132 1.132L8 9.13l-4.434 4.435a.8.8 0 0 1-1.132-1.132L6.87 8 2.434 3.566a.8.8 0 0 1 1.132-1.132L8 6.87l4.434-4.435a.8.8 0 0 1 1.132 0Z" clip-rule="evenodd"/></svg>' className="w-html-embed" />
                      </DialogClose>
                    </DialogContent>
                  </DialogOverlay>
                </Dialog>
              </Box>
            </Box>
          </Fragment_1>
        </Slot>
        <Box className="w-box c2ueoyp cwy7e20 ctskr9n czeayd3 c1d3r4j5 cd5r7jh ckydxof cunu00i c8nk80o c1a6r51h cyrajba co923ah c1cnh0oy">
          <Box className="w-box c68bo36 c8nk80o c14pfhm5 c1a6r51h cyrajba cowsn86">
            <Box className="w-box c7p2prc">
              <Heading className="w-heading cgiqncz cuuasv7 c8nk80o c14pfhm5">
                <Text className="w-text c1ol8vgd c15lgcvk c1lywmer c1ivme3m cd1rmow c1e3pejf c1t418cu ct22p2k cfzi32s c8og876 c140jchj c152fx7m">
                  {"Liên Hệ"}
                </Text>
                <Text className="w-text c1ol8vgd c15lgcvk c1lywmer c1ivme3m cd1rmow c1e3pejf c1t418cu ct22p2k cfzi32s c8og876 c1bcgmvt c140jchj c152fx7m">
                  {"Với Tôi"}
                </Text>
              </Heading>
              <Box className="w-box c4atwyc c1qk1h6g cfsrdu1 c14pfhm5 c42d2do c1t7dt52 c8nk80o c1r351e c1rzjbxv c9zn0lm c1ervskt c16s5z56 c1mv0i7u c1yhcypo c8r9u4b c1qebk47 cs5r0r4 c1wudvpy cbd1ctl">
                <Box className="w-box cq68ihc c8nk80o c13x75cb cyqg6ud c1n9yegh c1f37pet c1cxcrgv c1n81g8p c1fcxglx cm00p69 cme02t3">
                  <Slot>
                    <Fragment_1>
                      <Link target="_blank" href="https://www.instagram.com/" className="w-link c1dt4ltr cz2nl1p c8nk80o cejhttc c1ivme3m cd1rmow c1e3pejf c1t418cu cnllpgu c1i1aojq c1yuknh1 c1qzzmdv cvcugnk c126hovt c8iap09">
                        <HtmlEmbed code='<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 32 32" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M16 9.32426C12.313 9.32426 9.32426 12.313 9.32426 16C9.32426 19.6868 12.313 22.6756 16 22.6756C19.6868 22.6756 22.6756 19.6868 22.6756 16C22.6756 12.313 19.6868 9.32426 16 9.32426ZM16 20.3333C13.6067 20.3333 11.6666 18.3932 11.6666 16C11.6666 13.6067 13.6067 11.6666 16 11.6666C18.3932 11.6666 20.3333 13.6067 20.3333 16C20.3333 18.3932 18.3932 20.3333 16 20.3333Z" fill="currentcolor"></path><path d="M22.9422 10.6203C23.8038 10.6203 24.5023 9.92187 24.5023 9.06029C24.5023 8.19872 23.8038 7.50032 22.9422 7.50032C22.0807 7.50032 21.3822 8.19872 21.3822 9.06029C21.3822 9.92187 22.0807 10.6203 22.9422 10.6203Z" fill="currentcolor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M16 3C12.4694 3 12.0267 3.01497 10.6401 3.07823C9.25642 3.14139 8.3114 3.36112 7.48445 3.68251C6.62959 4.01473 5.90461 4.45925 5.1819 5.18195C4.45919 5.90466 4.01468 6.62964 3.68246 7.48451C3.36107 8.3114 3.14134 9.25642 3.07818 10.6401C3.01491 12.0267 3 12.4694 3 16C3 19.5306 3.01491 19.9733 3.07818 21.3599C3.14134 22.7436 3.36107 23.6886 3.68246 24.5155C4.01468 25.3704 4.45919 26.0953 5.1819 26.8181C5.90461 27.5408 6.62959 27.9853 7.48445 28.3175C8.3114 28.6389 9.25642 28.8587 10.6401 28.9218C12.0267 28.985 12.4694 29 16 29C19.5306 29 19.9733 28.985 21.3599 28.9218C22.7436 28.8587 23.6886 28.6389 24.5155 28.3175C25.3704 27.9853 26.0953 27.5408 26.8181 26.8181C27.5408 26.0953 27.9853 25.3704 28.3175 24.5155C28.6389 23.6886 28.8587 22.7436 28.9218 21.3599C28.985 19.9733 29 19.5306 29 16C29 12.4694 28.985 12.0267 28.9218 10.6401C28.8587 9.25642 28.6389 8.3114 28.3175 7.48451C27.9853 6.62964 27.5408 5.90466 26.8181 5.18195C26.0953 4.45925 25.3704 4.01473 24.5155 3.68251C23.6886 3.36112 22.7436 3.14139 21.3599 3.07823C19.9733 3.01497 19.5306 3 16 3ZM16 5.34239C19.4711 5.34239 19.8823 5.3556 21.2531 5.41814C22.5206 5.47599 23.2089 5.68777 23.667 5.86575C24.2738 6.10158 24.7069 6.38334 25.1618 6.83822C25.6167 7.29311 25.8984 7.72622 26.1342 8.33297C26.3123 8.79106 26.5241 9.4794 26.5819 10.7469C26.6444 12.1177 26.6577 12.5289 26.6577 16C26.6577 19.4711 26.6444 19.8823 26.5819 21.2531C26.5241 22.5206 26.3123 23.2089 26.1342 23.667C25.8984 24.2738 25.6167 24.7069 25.1618 25.1618C24.7069 25.6167 24.2738 25.8984 23.667 26.1342C23.2089 26.3123 22.5206 26.5241 21.2531 26.5819C19.8825 26.6444 19.4714 26.6577 16 26.6577C12.5286 26.6577 12.1175 26.6444 10.7469 26.5819C9.4794 26.5241 8.79106 26.3123 8.33297 26.1342C7.72617 25.8984 7.29311 25.6167 6.83817 25.1618C6.38329 24.7069 6.10153 24.2738 5.86575 23.667C5.68772 23.2089 5.47594 22.5206 5.41809 21.2531C5.35555 19.8823 5.34234 19.4711 5.34234 16C5.34234 12.5289 5.35555 12.1177 5.41809 10.7469C5.47594 9.4794 5.68772 8.79106 5.86575 8.33297C6.10153 7.72622 6.38329 7.29311 6.83817 6.83822C7.29311 6.38334 7.72617 6.10158 8.33297 5.86575C8.79106 5.68777 9.4794 5.47599 10.7469 5.41814C12.1177 5.3556 12.5289 5.34239 16 5.34239Z" fill="currentcolor"></path></svg>' className="w-html-embed" />
                      </Link>
                    </Fragment_1>
                  </Slot>
                  <Slot>
                    <Fragment_1>
                    </Fragment_1>
                  </Slot>
                  <Slot>
                    <Fragment_1>
                    </Fragment_1>
                  </Slot>
                  <Slot>
                    <Fragment_1>
                    </Fragment_1>
                  </Slot>
                  <Slot>
                    <Fragment_1>
                    </Fragment_1>
                  </Slot>
                </Box>
              </Box>
            </Box>
            <Box className="w-box c68bo36 c1661bk4 c1qutx8k c1outejm csvdpo4">
              <Image src="/assets/surface-EjAbk2U3REE-unsplash_i_xnM86Z-9-RlfTSFRgzj.jpeg" className="w-image c68bo36 c1661bk4 c1ttc2dv" />
            </Box>
          </Box>
          <Box className="w-box c68bo36 c1w5cw8z cowsn86 c8nk80o c14pfhm5 c1a6r51h cyrajba cpeqh71">
            <Form state={formState} onStateChange={(state: any) => {
              formState = state;
              set$formState(formState);
            }} className="w-webhook-form c8nk80o c14pfhm5 c1n9yegh c1f37pet c1ymqaea cyqg6ud">
              {(formState === 'initial' || formState === 'error') &&
                <Box className="w-box">
                  <Label className="w-input-label">
                    {"Tên"}
                  </Label>
                  <Input name="name" type="text" required={true} className="w-text-input c68bo36 cfzi32s ct22p2k c8og876 c1scknq9 co51bl3 c13yiahk" />
                </Box>
              }
              {(formState === 'initial' || formState === 'error') &&
                <Box className="w-box">
                  <Label className="w-input-label">
                    {"Địa chỉ Email"}
                  </Label>
                  <Input name="email" type="email" required={true} className="w-text-input c68bo36 cfzi32s ct22p2k c8og876 c1scknq9 co51bl3 c13yiahk" />
                </Box>
              }
              {(formState === 'initial' || formState === 'error') &&
                <Box className="w-box">
                  <Label className="w-input-label">
                    {"Giới thiệu về dự án của bạn"}
                  </Label>
                  <Textarea name="Message" required={true} className="w-text-area c68bo36 cfzi32s ct22p2k c8og876 c1scknq9 co51bl3 c13yiahk" />
                </Box>
              }
              {(formState === 'initial' || formState === 'error') &&
                <Button className="w-button cnhmrg7 cv8693i c1mfbi5p c1wfmwzd c1od6hx9 ceo1y7m c1ivme3m cd1rmow c1e3pejf c1t418cu c9jfr10 c4efqah c4xxk3j c1dvfaiy c1f6jgc2 cejhttc c8nk80o c13x75cb cyqg6ud c1inq1yc c1scknq9 c1c40v9p cjq2ygk c91j3x2 cmk8m2m c13trlse c13qd8os c16v63p8 c2j77oj c8iap09 c12qkri5 co72ipd">
                  <Box className="w-box c1fyjyvq cqxga0r" />
                  <Text tag="span" className="w-text c1o8hml3 c1ad1g5y c15lgcvk c1f6jgc2 c1qo8o4l">
                    {"Gửi"}
                  </Text>
                </Button>
              }
              {(formState === 'success') &&
                <Box className="w-box">
                  <Text className="w-text">
                    {"Cảm ơn bạn đã liên hệ!"}
                  </Text>
                </Box>
              }
              {(formState === 'error') &&
                <Box className="w-box">
                  <Text className="w-text">
                    {"Xin lỗi, đã có lỗi xảy ra."}
                  </Text>
                </Box>
              }
            </Form>
            <Text className="w-text">
              {"Bạn sẵn sàng biến không gian của mình thành một điều gì đó phi thường? Hãy liên hệ để cùng nhau hiện thực hóa tầm nhìn của bạn!"}
            </Text>
          </Box>
        </Box>
        <Slot>
          <Fragment_1>
            <Box className="w-box cz2kf56 c7p2prc">
              <Box className="w-box c1bsu9b6 c1nt4a8i c3lk5pa c1eq3wrs c6b6nxe c1rllvmm cynkcnm c8nk80o c1a6r51h cyrajba cpeqh71 c15cspf0 c6kwm01 c18m0pjh c7in0j3 c14cp74y c1hfs0g9 cuyrjma c2ueoyp">
                <Box className="w-box c8nk80o c14pfhm5">
                  <Heading className="w-heading c1lywmer c1e75frj c15lgcvk cgiqncz culjnom c1j8ubra c1we5scq c1m5tofo c175li3f">
                    {"Danh Mục Cá Nhân của Đỗ Thành Thông"}
                  </Heading>
                  <Text className="w-text c1ytpk7j c6mllus c1i2stb4">
                    <br />
                    {"Được xây dựng bởi Thành Thông!"}
                  </Text>
                </Box>
                <Box className="w-box c8nk80o cir24w6 c1b6azdr">
                  <Box className="w-box c8nk80o c14pfhm5 c1n9yegh c1f37pet culjnom c1j8ubra c1m5tofo">
                    <Link href="/" target="_self" prefetch="intent" className="w-link cejhttc c1f6jgc2 c15lgcvk c1ytpk7j c1lywmer clu3ty5">
                      {"Trang Chủ"}
                    </Link>
                    <Link href="/about" target="_self" prefetch="intent" className="w-link cejhttc c1f6jgc2 c15lgcvk c1ytpk7j c1lywmer clu3ty5">
                      {"Giới Thiệu"}
                    </Link>
                    <Link href="/contact" target="_self" prefetch="intent" className="w-link cejhttc c1f6jgc2 c15lgcvk c1ytpk7j c1lywmer clu3ty5">
                      {"Liên Hệ"}
                    </Link>
                  </Box>
                  <Box className="w-box c8nk80o c14pfhm5 c1n9yegh c1f37pet culjnom c1j8ubra c1m5tofo">
                    <Link href="https://twitter.com/home" target="_blank" prefetch="none" className="w-link cejhttc c1f6jgc2 c15lgcvk c1ytpk7j c1lywmer clu3ty5">
                      {"Twitter ↗"}
                    </Link>
                    <Link href="https://www.facebook.com/" target="_blank" prefetch="none" className="w-link cejhttc c1f6jgc2 c15lgcvk c1ytpk7j c1lywmer clu3ty5">
                      {"Facebook ↗"}
                    </Link>
                    <Link href="https://www.pinterest.com/" target="_blank" prefetch="none" className="w-link cejhttc c1f6jgc2 c15lgcvk c1ytpk7j c1lywmer clu3ty5">
                      {"Pinterest ↗"}
                    </Link>
                    <Link href="https://www.linkedin.com/feed/" target="_blank" prefetch="none" className="w-link cejhttc c1f6jgc2 c15lgcvk c1ytpk7j c1lywmer clu3ty5">
                      {"LinkedIn ↗"}
                    </Link>
                  </Box>
                </Box>
                <Text className="w-text c1ytpk7j c13pijs9 c1ikruxj c6mllus c1vu9gqi">
                  <br />
                  {"Được xây dựng bởi Thành Thông!"}
                </Text>
              </Box>
            </Box>
          </Fragment_1>
        </Slot>
      </Box>
    </Body>
  );
};

export { Page };