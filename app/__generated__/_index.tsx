/* eslint-disable */
/* This is an auto-generated file for building the project */

import { Fragment, useState } from "react";
import { useResource, useVariableState } from "@webstudio-is/react-sdk/runtime";
import { Body, Box, Fragment as Fragment_1, Text, Link, Heading, Slot, Paragraph, Image, HtmlEmbed, Button, Separator } from "@webstudio-is/sdk-components-react";
import { Dialog, DialogTrigger, DialogOverlay, DialogContent, DialogClose } from "@webstudio-is/sdk-components-react-radix";

export const projectId = "fd3eec37-dc19-49f8-8c38-1b3480b70545";

export const lastPublished = "2025-07-13T08:17:31.514Z";

export const siteName = "ThanhThong";

export const breakpoints = [
  { "id": "xJeou5xD-ZPSvh_xQmigm" },
  { "id": "q27LwumJRpeWr-2KevzAM", "maxWidth": 991 },
  { "id": "vJ6Hj6-9uawC16QIPkB7M", "maxWidth": 767 },
  { "id": "NIuo9sUEVMrgoahxXlZFz", "maxWidth": 479 }
];

export const favIconAsset: string | undefined = undefined;

export const pageFontAssets: string[] = [
  "InstrumentSans-VariableFont_wdth_wght_o3etf9mcJeUAJ0jUkHwMF.ttf"
];

export const pageBackgroundImageAssets: string[] = [
  "SVG_Icon_34KbjMGJYz0OUHhl1EV0T.svg",
  "About_Icon_White_AYFGTaG0Xjjp6P34Tf0gb.svg",
  "Portfolio__Icon_VC6lMDbymwZEJV7H7JBQ3.svg",
  "Contact_Icon_White_67_HWShh4J6gTKgI61jvg.svg"
];

export const CustomCode = () => {
  return (<></>);
};

const Page = (_props: { system: any }) => {
  let [sheetOpen, set$sheetOpen] = useVariableState<any>(false);
  return (
    <Body className="w-body">
      <Box className="w-box c11lapjv c1tmx3h cjgcbjj cejhttc chvjn1z c7p2prc czw8boz">
        <Slot>
          <Fragment_1>
            <Box className="w-box c1sotb2x c1qk1h6g c1osc9n6 c1awg9k3 cyw754m">
              <Box className="w-box c8nk80o c13x75cb cpeqh71 cqq2eg1 c18xl9bf cx9qu6t c1xrbobn ckydxof cunu00i cwy7e20 ctskr9n">
                <Link href="/" target="_self" prefetch="intent" className="w-link c1o8hml3 cejhttc c1ad1g5y c15lgcvk c1f6jgc2 c1qo8o4l clu3ty5">
                  {"Danh Mục ThanhThong"}
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
                  <DialogOverlay className="w-dialog-overlay c1sotb2x c1osc9n6 c bookshelf1qk1h6g c1t7dt52 c68fyns c1b35ja6 c1isnxag cg4lnn c8nk80o c14pfhm5 ci9ibf8 cphaibv">
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
        <Box className="w-box c1cnh0oy cd5r7jh ckydxof cunu00i c8nk80o c14pfhm5 c1a6r51h cyrajba c1sotb2x c1t7dt52 c1qk1h6g c68fyns c1osc9n6 cwy7e20 ctskr9n">
          <Box className="w-box c7p2prc c1jru4eg c1n9yegh c1f37pet c14pfhm5">
            <Heading className="w-heading cgiqncz cuuasv7 c8nk80o c14pfhm5 c7p2prc">
              <Text className="w-text c1ol8vgd c15lgcvk c1lywmer c1ivme3m cd1rmow c1e3pejf c1t418cu ct22p2k cfzi32s c8og876 c12thir9 c140jchj c1b9a0m5">
                {"Thông Tin Của Bạn"}
              </Text>
              <Text className="w-text c1ol8vgd c15lgcvk c1lywmer c1ivme3m cd1rmow c1e3pejf c1t418cu ct22p2k cfzi32s c8og876 c1bcgmvt c12thir9 c140jchj c1b9a0m5">
                {"Ngày Mai Của Bạn"}
              </Text>
            </Heading>
            <Box className="w-box c1qk1h6g c1osc9n6 c68fyns c1t7dt52 c8nk80o c14pfhm5 c4atwyc c42d2do c1t6cxfb cme02t3 cm00p69 c18m0pjh c8r9u4b cncnyxj">
              <Box className="w-box cq68ihc c8nk80o c13x75cb c1ogvzo5 c1fcxglx">
                <Slot>
                  <Fragment_1>
                    <Link target="_self" href="/contact" prefetch="intent" className="w-link cnhmrg7 cv8693i c1mfbi5p c1wfmwzd c1od6hx9 ceo1y7m c1ivme3m cd1rmow c1e3pejf c1t418cu c9jfr10 c4efqah c4xxk3j c1dvfaiy c1f6jgc2 cejhttc c8nk80o c13x75cb cyqg6ud c1c40v9p cjq2ygk c91j3x2 cmk8m2m c13trlse c13qd8os c16v63p8 c2j77oj c8iap09 c12qkri5 co72ipd">
                      <Box className="w-box c1fyjyvq cqxga0r" />
                      <Text className="w-text c15lgcvk culjnom c1j8ubra c1o8hml3 c1ad1g5y c1f6jgc2 c1qo8o4l">
                        {"Liên Hệ Ngay"}
                      </Text>
                    </Link>
                  </Fragment_1>
                </Slot>
              </Box>
              <Box className="w-box cq68ihc c8nk80o c13x75cb cyqg6ud c1n9yegh c1f37pet c1cxcrgv c1n81g8p c1fcxglx cme02t3 cm00p69">
                <Slot>
                  <Fragment_1>
                    <Link target="_blank" href="https://webstudio.is/" className="w-link c1dt4ltr cz2nl1p cejhttc c1ivme3m cd1rmow c1e3pejf c1t418cu cnllpgu c1i1aojq c1yuknh1 c1qzzmdv c8nk80o cvcugnk c8iap09 c126hovt">
                      <HtmlEmbed code='<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 32 32" fill="none"><path d="M24.0516 3.3457H28.3452L18.9651 14.0671L30 28.6564H21.3598L14.5924 19.8081L6.84902 28.6564H2.55291L12.5858 17.1887L2 3.3457H10.8596L16.9767 11.4335L24.0516 3.3457ZM22.5448 26.0864H24.9238L9.56687 5.78073H7.01386L22.5448 26.0864Z" fill="currentcolor"></path></svg>' className="w-html-embed" />
                    </Link>
                  </Fragment_1>
                </Slot>
                <Slot>
                  <Fragment_1>
                    <Link target="_blank" href="https://webstudio.is/" className="w-link c1dt4ltr cz2nl1p c8nk80o cejhttc c1ivme3m cd1rmow c1e3pejf c1t418cu cnllpgu c1i1aojq c1yuknh1 c1qzzmdv cvcugnk c126hovt c8iap09">
                      <HtmlEmbed code='<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 32 32" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M16 9.32426C12.313 9.32426 9.32426 12.313 9.32426 16C9.32426 19.6868 12.313 22.6756 16 22.6756C19.6868 22.6756 22.6756 19.6868 22.6756 16C22.6756 12.313 19.6868 9.32426 16 9.32426ZM16 20.3333C13.6067 20.3333 11.6666 18.3932 11.6666 16C11.6666 13.6067 13.6067 11.6666 16 11.6666C18.3932 11.6666 20.3333 13.6067 20.3333 16C20.3333 18.3932 18.3932 20.3333 16 20.3333Z" fill="currentcolor"></path><path d="M22.9422 10.6203C23.8038 10.6203 24.5023 9.92187 24.5023 9.06029C24.5023 8.19872 23.8038 7.50032 22.9422 7.50032C22.0807 7.50032 21.3822 8.19872 21.3822 9.06029C21.3822 9.92187 22.0807 10.6203 22.9422 10.6203Z" fill="currentcolor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M16 3C12.4694 3 12.0267 3.01497 10.6401 3.07823C9.25642 3.14139 8.3114 3.36112 7.48445 3.68251C6.62959 4.01473 5.90461 4.45925 5.1819 5.18195C4.45919 5.90466 4.01468 6.62964 3.68246 7.48451C3.36107 8.3114 3.14134 9.25642 3.07818 10.6401C3.01491 12.0267 3 12.4694 3 16C3 19.5306 3.01491 19.9733 3.07818 21.3599C3.14134 22.7436 3.36107 23.6886 3.68246 24.5155C4.01468 25.3704 4.45919 26.0953 5.1819 26.8181C5.90461 27.5408 6.62959 27.9853 7.48445 28.3175C8.3114 28.6389 9.25642 28.8587 10.6401 28.9218C12.0267 28.985 12.4694 29 16 29C19.5306 29 19.9733 28.985 21.3599 28.9218C22.7436 28.8587 23.6886 28.6389 24.5155 28.3175C25.3704 27.9853 26.0953 27.5408 26.8181 26.8181C27.5408 26.0953 27.9853 25.3704 28.3175 24.5155C28.6389 23.6886 28.8587 22.7436 28.9218 21.3599C28.985 19.9733 29 19.5306 29 16C29 12.4694 28.985 12.0267 28.9218 10.6401C28.8587 9.25642 28.6389 8.3114 28.3175 7.48451C27.9853 6.62964 27.5408 5.90466 26.8181 5.18195C26.0953 4.45925 25.3704 4.01473 24.5155 3.68251C23.6886 3.36112 22.7436 3.14139 21.3599 3.07823C19.9733 3.01497 19.5306 3 16 3ZM16 5.34239C19.4711 5.34239 19.8823 5.3556 21.2531 5.41814C22.5206 5.47599 23.2089 5.68777 23.667 5.86575C24.2738 6.10158 24.7069 6.38334 25.1618 6.83822C25.6167 7.29311 25.8984 7.72622 26.1342 8.33297C26.3123 8.79106 26.5241 9.4794 26.5819 10.7469C26.6444 12.1177 26.6577 12.5289 26.6577 16C26.6577 19.4711 26.6444 19.8823 26.5819 21.2531C26.5241 22.5206 26.3123 23.2089 26.1342 23.667C25.8984 24.2738 25.6167 24.7069 25.1618 25.1618C24.7069 25.6167 24.2738 25.8984 23.667 26.1342C23.2089 26.3123 22.5206 26.5241 21.2531 26.5819C19.8825 26.6444 19.4714 26.6577 16 26.6577C12.5286 26.6577 12.1175 26.6444 10.7469 26.5819C9.4794 26.5241 8.79106 26.3123 8.33297 26.1342C7.72617 25.8984 7.29311 25.6167 6.83817 25.1618C6.38329 24.7069 6.10153 24.2738 5.86575 23.667C5.68772 23.2089 5.47594 22.5206 5.41809 21.2531C5.35555 19.8823 5.34234 19.4711 5.34234 16C5.34234 12.5289 5.35555 12.1177 5.41809 10.7469C5.47594 9.4794 5.68772 8.79106 5.86575 8.33297C6.10153 7.72622 6.38329 7.29311 6.83817 6.83822C7.29311 6.38334 7.72617 6.10158 8.33297 5.86575C8.79106 5.68777 9.4794 5.47599 10.7469 5.41814C12.1177 5.3556 12.5289 5.34239 16 5.34239Z" fill="currentcolor"></path></svg>' className="w-html-embed" />
                    </Link>
                  </Fragment_1>
                </Slot>
                <Slot>
                  <Fragment_1>
                    <Link target="_blank" href="https://webstudio.is/" className="w-link c1dt4ltr cz2nl1p c8nk80o cejhttc c1ivme3m cd1rmow c1e3pejf c1t418cu cnllpgu c1i1aojq c1yuknh1 c1qzzmdv cvcugnk c8iap09 c126hovt">
                      <HtmlEmbed code='<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 32 32" fill="none"><path d="M9.10234 17.7908C9.39008 17.8867 9.77372 17.7908 9.86963 17.4072C9.96555 17.1194 10.0615 16.544 10.1574 16.2562C10.2533 15.8726 10.2533 15.7767 9.96555 15.4889C9.39008 14.8176 9.00643 13.9544 9.00643 12.7075C9.00643 9.06287 11.692 5.80188 16.1039 5.80188C19.9403 5.80188 22.0504 8.19967 22.0504 11.2688C22.0504 15.393 20.2281 18.9418 17.4466 18.9418C15.9121 18.9418 14.857 17.6949 15.1448 16.1603C15.6243 14.338 16.3916 12.4198 16.3916 11.077C16.3916 9.92607 15.7202 8.96696 14.4734 8.96696C12.9388 8.96696 11.692 10.5975 11.692 12.7075C11.692 14.0503 12.1715 15.0094 12.1715 15.0094C12.1715 15.0094 10.6369 21.6273 10.3492 22.8741C9.77372 25.176 10.2533 28.0534 10.3492 28.3411C10.3492 28.5329 10.6369 28.5329 10.7328 28.437C10.8288 28.2452 12.747 26.0392 13.3225 23.7373C13.5143 23.066 14.3775 19.805 14.3775 19.805C14.857 20.7641 16.2957 21.6273 17.9262 21.6273C22.53 21.6273 25.695 17.4072 25.695 11.7484C25.695 7.52829 22.0504 3.5 16.5834 3.5C9.77372 3.5 6.32091 8.39149 6.32091 12.5157C6.12909 14.8176 7.0882 17.0235 9.10234 17.7908Z" fill="currentcolor"></path></svg>' className="w-html-embed" />
                    </Link>
                  </Fragment_1>
                </Slot>
                <Slot>
                  <Fragment_1>
                    <Link target="_blank" href="https://webstudio.is/" className="w-link c1dt4ltr cz2nl1p c8nk80o cejhttc c1ivme3m cd1rmow c1e3pejf c1t418cu cnllpgu c1i1aojq c1yuknh1 c1qzzmdv cvcugnk c8iap09 c126hovt">
                      <HtmlEmbed code='<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 32 32" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.19097 9.38193C7.96372 9.38193 9.38193 7.96372 9.38193 6.19097C9.38193 4.41821 7.96372 3 6.19097 3C4.41821 3 3 4.41821 3 6.19097C3 7.96372 4.41821 9.38193 6.19097 9.38193ZM8.79225 11.6267H3.47397V28.9997H8.79225V11.6267ZM20.7266 16.0003C18.5993 16.0003 17.4174 17.4186 17.4174 19.9004C17.4174 22.5005 17.4174 29.0006 17.5356 29.0006H12.3355V11.6275H17.5356V13.9912C17.5356 13.9912 19.072 11.1548 22.7357 11.1548C26.3994 11.1548 28.9994 13.4003 28.9994 18.0095V29.0006H23.6812V19.9004C23.6812 17.4186 22.7357 16.0003 20.7266 16.0003Z" fill="currentcolor"></path></svg>' className="w-html-embed" />
                    </Link>
                  </Fragment_1>
                </Slot>
                <Slot><Fragment_1></Fragment_1></Slot>
                <Slot><Fragment_1></Fragment_1></Slot>
                <Slot><Fragment_1></Fragment_1></Slot>
                <Slot><Fragment_1></Fragment_1></Slot>
              </Box>
            </Box>
          </Box>
          <Box className="w-box c68bo36 c1qutx8k c1outejm c1661bk4">
            <Image src="/assets/jason-wang-5MG8cQbw-T8-unsplash_StJdZ_IllIv__SQA5S3nB.jpg" className="w-image c68bo36 c1ttc2dv c1661bk4 c1xkrcu9 c7mpuod" />
          </Box>
        </Box>
        <Box className="w-box c7p2prc c42d2do c14pfhm5 csgrrs c363nkm cyw754m c199s1ik">
          <Box className="w-box c3lk5pa c1eq3wrs c6b6nxe c8nk80o c14pfhm5 cswqhtm cty76jx citcu8z c15cspf0 c6kwm01 c18m0pjh c7in0j3 c14cp74y c1hfs0g9 cuyrjma czn5lo9 c12f1nir">
            <Box className="w-box c8nk80o c14pfhm5 c1a6r51h cyrajba">
              <Heading className="w-heading c1lywmer ce8e3ub cgiqncz cuuasv7 cf91v3h">
                {"Dự Án Gần Đây"}
              </Heading>
              <Link href="/project" target="_self" prefetch="intent" className="w-link c1f6jgc2 c8nk80o c14pfhm5 cqq2eg1 c18xl9bf cejhttc">
                <Box className="w-box c1igsn7p c1qutx8k c1outejm">
                  <Image src="/assets/paul-weaver-nWidMEQsnAQ-unsplash_Hd9bvJ49YlnnKKVNOBIT4.jpeg" className="w-image c68bo36 c1661bk4 c1ttc2dv c8fybya" />
                </Box>
                <Box className="w-box c8nk80o c14pfhm5 ceob71o c1gzwxt8">
                  <Box className="w-box cp19w54 c8nk80o cc3q8ja ceob71o cyvk86c cqrult6">
                    <Text className="w-text c1ytpk7j c1lywmer c6mllus">
                      {"Giải Pháp Đại Lý Sáng Tạo"}
                    </Text>
                    <Text className="w-text c1ytpk7j c6mllus">
                      {"Thương Mại"}
                    </Text>
                  </Box>
                  <Text className="w-text c1lywmer">
                    {"Thời Thượng Công Nghiệp: Cải Tạo Không Gian Kho Thành Văn Phòng Loft Phong Cách"}
                  </Text>
                </Box>
              </Link>
              <Box className="w-box c8nk80o c1n9yegh cyrajba c18m0pjh">
                <Link href="/project" target="_self" prefetch="intent" className="w-link c1f6jgc2 c8nk80o c14pfhm5 cqq2eg1 c18xl9bf cejhttc c68bo36">
                  <Box className="w-box c68bo36 c1fyjyvq c1qutx8k c1outejm">
                    <Image src="/assets/kara-eads-L7EwHkq1B2s-unsplash_hZnqf6_CYa3hSkI38E38B.jpg" className="w-image c68bo36 c1661bk4 c1ttc2dv" />
                  </Box>
                  <Box className="w-box c8nk80o c14pfhm5 ceob71o c1gzwxt8">
                    <Box className="w-box cp19w54 c8nk80o cc3q8ja ceob71o cyvk86c cqrult6">
                      <Text className="w-text c1ytpk7j c1lywmer c6mllus">
                        {"Công Ty Sống Chung Cư Đô Thị"}
                      </Text>
                      <Text className="w-text c1ytpk7j c6mllus">
                        {"Dân Cư"}
                      </Text>
                    </Box>
                    <Text className="w-text c1lywmer">
                      {"Ốc Đảo Đô Thị: Biến Căn Hộ Thành Phố Nhỏ Thành Nơi Trú Ẩn Thanh Bình"}
                    </Text>
                  </Box>
                </Link>
                <Link href="/project" target="_self" prefetch="intent" className="w-link c1f6jgc2 c8nk80o c14pfhm5 cqq2eg1 c18xl9bf cejhttc c68bo36">
                  <Box className="w-box c68bo36 c1fyjyvq c1qutx8k c1outejm">
                    <Image src="/assets/earl-wilcox-3xpQCOOe6hM-unsplash_2NerSMvO382JJHUQu1XdM.jpg" className="w-image c68bo36 c1661bk4 c1ttc2dv" />
                  </Box>
                  <Box className="w-box c8nk80o c14pfhm5 ceob71o c1gzwxt8">
                    <Box className="w-box cp19w54 c8nk80o cc3q8ja ceob71o cyvk86c cqrult6">
                      <Text className="w-text c1ytpk7j c1lywmer c6mllus">
                        {"Bất Động Sản Khu Nghỉ Dưỡng Ven Biển"}
                      </Text>
                      <Text className="w-text c1ytpk7j c6mllus">
                        {"Dân Cư"}
                      </Text>
                    </Box>
                    <Text className="w-text c1lywmer">
                      {"Thoát Hiểm Ven Biển: Tạo Nơi Nghỉ Dưỡng Lấy Cảm Hứng Từ Bãi Biển Trong Biệt Thự Ven Biển"}
                    </Text>
                  </Box>
                </Link>
              </Box>
              <Box className="w-box c8nk80o c1n9yegh cyrajba c18m0pjh">
                <Link href="/project" target="_self" prefetch="intent" className="w-link c1f6jgc2 c8nk80o c14pfhm5 cqq2eg1 c18xl9bf cejhttc c68bo36">
                  <Box className="w-box c68bo36 c1fyjyvq c1qutx8k c1outejm">
                    <Image src="/assets/charlesdeluvio-0Y1qUg1w2bs-unsplash_UR8HvTkMX3wmlnQBNynB0.jpg" className="w-image c68bo36 c1661bk4 c1ttc2dv" />
                  </Box>
                  <Box className="w-box c8nk80o c14pfhm5 ceob71o c1gzwxt8">
                    <Box className="w-box cp19w54 c8nk80o cc3q8ja ceob71o cyvk86c cqrult6">
                      <Text className="w-text c1ytpk7j c1lywmer c6mllus">
                        {"Công Ty Đổi Mới Công Nghệ"}
                      </Text>
                      <Text className="w-text c1ytpk7j c6mllus">
                        {"Thương Mại"}
                      </Text>
                    </Box>
                    <Text className="w-text c1lywmer">
                      {"Tối Giản Hiện Đại: Thiết Kế Không Gian Văn Phòng Thanh Lịch và Chức Năng"}
                    </Text>
                  </Box>
                </Link>
                <Link href="/project" target="_self" prefetch="intent" className="w-link c1f6jgc2 c8nk80o c14pfhm5 cqq2eg1 c18xl9bf cejhttc c68bo36">
                  <Box className="w-box c68bo36 c1fyjyvq c1qutx8k c1outejm">
                    <Image src="/assets/spacejoy-h2_3dL9yLpU-unsplash_hWjk4TmVrAs44kmu5MuQ2.jpg" className="w-image c68bo36 c1661bk4 c1ttc2dv" />
                  </Box>
                  <Box className="w-box c8nk80o c14pfhm5 ceob71o c1gzwxt8">
                    <Box className="w-box cp19w54 c8nk80o cc3q8ja ceob71o cyvk86c cqrult6">
                      <Text className="w-text c1ytpk7j c1lywmer c6mllus">
                        {"Trung Tâm Sức Khỏe Thanh Tịnh"}
                      </Text>
                      <Text className="w-text c1ytpk7j c6mllus">
                        {"Khách Sạn"}
                      </Text>
                    </Box>
                    <Text className="w-text c1lywmer">
                      {"Thanh Lịch Mộc Mạc: Tô Điểm Nơi Nghỉ Dưỡng Núi Với Sự Ấm Áp và Tinh Tế"}
                    </Text>
                  </Box>
                </Link>
              </Box>
            </Box>
            <Separator className="w-separator c68bo36" />
            <Box className="w-box c8nk80o c14pfhm5 c68bo36 c1a6r51h cyrajba">
              <Box className="w-box c8nk80o cqrult6 c13x75cb cpeqh71 ceob71o c1gzwxt8">
                <Heading className="w-heading cgiqncz cuuasv7 c1lywmer ce8e3ub cf91v3h">
                  {"Lời Chứng Thực"}
                </Heading>
                <Link href="/about" target="_self" prefetch="intent" className="w-link cnhmrg7 cv8693i c1mfbi5p c1wfmwzd c1od6hx9 ceo1y7m c1ivme3m cd1rmow c1e3pejf c1t418cu c9jfr10 c4efqah c4xxk3j c1dvfaiy c1f6jgc2 cejhttc c8nk80o c13x75cb cyqg6ud c1c40v9p cjq2ygk c91j3x2 c1nh4z3d c13trlse c13qd8os c16v63p8 c2j77oj c8iap09 c12qkri5 c17e6x85">
                  <Box className="w-box c1fyjyvq cqxga0r" />
                  <Text className="w-text c15lgcvk c1o8hml3 c1ad1g5y c1f6jgc2 c1qo8o4l">
                    {"Xem Tất Cả"}
                  </Text>
                </Link>
              </Box>
              <Slot>
                <Fragment_1>
                  <Box className="w-box c8nk80o c1n9yegh cyrajba c61x9or">
                    <Box className="w-box c8nk80o c14pfhm5 c68bo36 cqq2eg1 c18xl9bf">
                      <Box className="w-box c8nk80o c13x75cb cyqg6ud cqq2eg1 cv8693i">
                        <Box className="w-box c1lr5y2d c1lrid cxfkus7 c13xknd8 cq8x19e crx3gtk c1qutx8k c1outejm">
                          <Image src="/assets/austin-wade-xjGZFo7X_nc-unsplash_v_-D6mc2Q7cYhwmxPTzua.jpeg" className="w-image c68bo36 c1661bk4 c1ttc2dv" />
                        </Box>
                        <Box className="w-box c8nk80o c14pfhm5 ceob71o c1gzwxt8">
                          <Text className="w-text c1lywmer">
                            {"Alycia Harlee"}
                          </Text>
                          <Box className="w-box cp19w54 c8nk80o c14pfhm5 cc3q8ja ceob71o cyvk86c c2y17za c18m0pjh">
                            <Text className="w-text c1ytpk7j c1lywmer c6mllus">
                              {"Giám Đốc Điều Hành"}
                            </Text>
                            <Text className="w-text c1ytpk7j c6mllus">
                              {"ThanhThong Design Studio"}
                            </Text>
                          </Box>
                        </Box>
                      </Box>
                      <Paragraph className="w-paragraph cgiqncz cuuasv7">
                        {"Trong suốt thời gian làm việc tại công ty chúng tôi, Sam đã thể hiện kỹ năng thiết kế xuất sắc và con mắt tinh tế về chi tiết."}
                      </Paragraph>
                    </Box>
                    <Box className="w-box c8nk80o c14pfhm5 c68bo36 cqq2eg1 c18xl9bf">
                      <Box className="w-box c8nk80o c13x75cb cyqg6ud cqq2eg1 cv8693i">
                        <Box className="w-box c1lr5y2d c1lrid cxfkus7 c13xknd8 cq8x19e crx3gtk c1qutx8k c1outejm">
                          <Image src="/assets/foto-sushi-6anudmpILw4-unsplash_h5hwOTKnnNXVSB6AaMHYT.jpeg" className="w-image c68bo36 c1661bk4 c1ttc2dv" />
                        </Box>
                        <Box className="w-box c8nk80o c14pfhm5 ceob71o c1gzwxt8">
                          <Text className="w-text c1lywmer">
                            {"Ethan Miller"}
                          </Text>
                          <Box className="w-box cp19w54 c8nk80o c14pfhm5 cc3q8ja ceob71o cyvk86c c2y17za c18m0pjh">
                            <Text className="w-text c1ytpk7j c1lywmer c6mllus">
                              {"Giám Đốc Sáng Tạo"}
                            </Text>
                            <Text className="w-text c1ytpk7j c6mllus">
                              {"ThanhThong Design Studio"}
                            </Text>
                          </Box>
                        </Box>
                      </Box>
                      <Paragraph className="w-paragraph cgiqncz cuuasv7">
                        {"Họ luôn mang đến những ý tưởng thiết kế sáng tạo, nắm bắt được tầm nhìn của khách hàng và vượt xa mong đợi của họ."}
                      </Paragraph>
                    </Box>
                    <Box className="w-box c8nk80o c14pfhm5 c68bo36 cqq2eg1 c18xl9bf">
                      <Box className="w-box c8nk80o c13x75cb cyqg6ud cqq2eg1 cv8693i">
                        <Box className="w-box c1lr5y2d c1lrid cxfkus7 c13xknd8 cq8x19e crx3gtk c1qutx8k c1outejm">
                          <Image src="/assets/sigmund-jzz_3jWMzHA-unsplash_nEaxM5M4m3fhbdJ20Absz.jpeg" className="w-image c68bo36 c1661bk4 c1ttc2dv" />
                        </Box>
                        <Box className="w-box c8nk80o c14pfhm5 ceob71o c1gzwxt8">
                          <Text className="w-text c1lywmer">
                            {"Olivia Ramirez"}
                          </Text>
                          <Box className="w-box cp19w54 c8nk80o c14pfhm5 cc3q8ja ceob71o cyvk86c c2y17za c18m0pjh">
                            <Text className="w-text c1ytpk7j c1lywmer c6mllus">
                              {"Quản Lý Dự Án"}
                            </Text>
                            <Text className="w-text c1ytpk7j c6mllus">
                              {"DEF Design Studio"}
                            </Text>
                          </Box>
                        </Box>
                      </Box>
                      <Paragraph className="w-paragraph cgiqncz cuuasv7">
                        {"Sam đã xây dựng mối quan hệ tuyệt vời với khách hàng, các bên liên quan của dự án và các thành viên trong nhóm."}
                      </Paragraph>
                    </Box>
                  </Box>
                </Fragment_1>
              </Slot>
            </Box>
            <Separator className="w-separator c68bo36" />
            <Box className="w-box c1n9yegh c1f37pet c8nk80o">
              <Box className="w-box c1a6r51h cyrajba c8nk80o c14pfhm5 cc3q8ja c7d3819 c68bo36 c5alcd0 c17nieo8">
                <Box className="w-box c10ekkc7 c5alcd0 c17nieo8 c1rzjbxv c12librc c1mv0i7u">
                  <Box className="w-box cfb835f c1ybg9qj c13pijs9 c1qutx8k c1outejm c1vu9gqi c1pfq0j cqxvbv4 cp7gzre c1gvivty">
                    <Image src="/assets/austin-wade-X6Uj51n5CE8-unsplash_59qxcdMMHV3PiWJ1NzE2f.jpg" className="w-image c68bo36 c1661bk4 c1ttc2dv cq68ihc cs9h3tm c8hnpv4" />
                  </Box>
                  <Heading className="w-heading c1lywmer ce8e3ub cgiqncz cuuasv7 cf91v3h">
                    {"Rất Vui Được Gặp Bạn"}
                  </Heading>
                </Box>
                <Paragraph className="w-paragraph cgiqncz cuuasv7">
                  {"Tôi thực sự yêu thích công việc của mình – biến những không gian bình thường thành những kiệt tác chức năng, ấn tượng là đam mê của tôi!"}
                </Paragraph>
                <Link href="/about" target="_self" prefetch="intent" className="w-link cnhmrg7 cv8693i c1mfbi5p c1wfmwzd c1od6hx9 ceo1y7m c1ivme3m cd1rmow c1e3pejf c1t418cu c9jfr10 c4efqah c4xxk3j c1dvfaiy c1f6jgc2 cejhttc c8nk80o c13x75cb cyqg6ud c1c40v9p cjq2ygk c91j3x2 c1nh4z3d c13trlse c13qd8os c16v63p8 c2j77oj c8iap09 c12qkri5 c17e6x85">
                  <Box className="w-box c1fyjyvq cqxga0r" />
                  <Text className="w-text c1o8hml3 c1ad1g5y c15lgcvk c1f6jgc2 c1qo8o4l">
                    {"Tìm Hiểu Thêm Về Tôi"}
                  </Text>
                </Link>
              </Box>
              <Box className="w-box c1qutx8k c1outejm c68bo36 c1i2stb4">
                <Image src="/assets/anhbanthan.jpg" className="w-image c68bo36 c1661bk4 c1ttc2dv cq68ihc cs9h3tm c1nsr10o" />
              </Box>
            </Box>
          </Box>
        </Box>
        <Slot>
          <Fragment_1>
            <Box className="w-box chvjn1z c7p2prc">
              <Box className="w-box c1bsu9b6 c1nt4a8i c3lk5pa c1eq3wrs c6b6nxe c1rllvmm co923ah c15cspf0 c6kwm01 c18m0pjh c7in0j3 c14cp74y c1hfs0g9 cuyrjma">
                <Heading className="w-heading cub4387 c1k14icg cgiqncz cuuasv7 c1lywmer c1e75frj c8nk80o c1n9yegh cyrajba c15lgcvk c1we5scq c2ueoyp c18m0pjh">
                  {"Quan Tâm Hợp Tác Cùng Nhau?"}
                </Heading>
                <Box className="w-box c8nk80o c13x75cb cpeqh71 c1ivme3m cd1rmow c1e3pejf c1t418cu cfzi32s c67ehv8 c8og876 ceob71o c1gzwxt8 c9zn0lm c2md8t4 c2ueoyp">
                  <Slot>
                    <Fragment_1>
                      <Link target="_self" href="/contact" prefetch="intent" className="w-link cnhmrg7 cv8693i c1mfbi5p c1wfmwzd c1od6hx9 ceo1y7m c1ivme3m cd1rmow c1e3pejf c1t418cu c9jfr10 c4efqah c4xxk3j c1dvfaiy c1f6jgc2 cejhttc c8nk80o c13x75cb cyqg6ud c1c40v9p cjq2ygk c91j3x2 cmk8m2m c13trlse c13qd8os c16v63p8 c2j77oj c8iap09 c12qkri5 co72ipd">
                        <Box className="w-box c1fyjyvq cqxga0r" />
                        <Text className="w-text c15lgcvk culjnom c1j8ubra c1o8hml3 c1ad1g5y c1f6jgc2 c1qo8o4l">
                          {"Liên Hệ Ngay"}
                        </Text>
                      </Link>
                    </Fragment_1>
                  </Slot>
                  <Heading className="w-heading cgiqncz cuuasv7 c1lywmer c1e75frj cub4387 c1k14icg c15lgcvk c1we5scq c1m5tofo csm9ex7">
                    {"Liên Hệ Ngay Hôm Nay"}
                  </Heading>
                </Box>
              </Box>
            </Box>
          </Fragment_1>
        </Slot>
        <Slot>
          <Fragment_1>
            <Box className="w-box cz2kf56 c7p2prc">
              <Box className="w-box c1bsu9b6 c1nt4a8i c3lk5pa c1eq3wrs c6b6nxe c1rllvmm cynkcnm c8nk80o c1a6r51h cyrajba cpeqh71 c15cspf0 c6kwm01 c18m0pjh c7in0j3 c14cp74y c1hfs0g9 cuyrjma c2ueoyp">
                <Box className="w-box c8nk80o c14pfhm5">
                  <Heading className="w-heading c1lywmer c1e75frj c15lgcvk cgiqncz culjnom c1j8ubra c1we5scq c1m5tofo c175li3f">
                    {"Danh Mục ThanhThong"}
                  </Heading>
                  <Text className="w-text c1ytpk7j c6mllus c1i2stb4">
                    {"Tất cả nội dung bản quyền © 2023 ThanhThong Inc."}
                    <br />
                    {"Mẫu này được tạo bởi ThanhThong!"}
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
                  {"Tất cả nội dung bản quyền © 2023 ThanhThong Inc."}
                  <br />
                  {"Mẫu này được tạo bởi ThanhThong!"}
                </Text>
              </Box>
            </Box>
            <a href="https://webstudio.is/?via=badge" target="_blank" className="w-element c1qw1566 c1cwdvcv c1xggkzv c13x75cb c7d3819 c1sotb2x c1lvvlgh c1mfbi5p c1r8ow2h c1wfmwzd c1nl8f8o c5mxgt2 c1cioz46 c1tb56a0 c5msy9o c8056mw c1ad1g5y cmebbpp c19eixaq cm5qwnj c1k32nrs c40h0uf c1f6jgc2 c1czqz82 cxbwle7 c1olsrci c1q3n1l7 ci0a9qm">
              <HtmlEmbed code='<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" width="100%" height="100%" style="display: block;"><path fill-rule="evenodd" d="m12.32 12.416 2.62-8.085a1.205 1.205 0 1 0-2.292-.746l-2.62 8.084a1.205 1.205 0 1 0 2.292.747Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M8 7.624c.297 0 .517.175.704.394.207.243.373.545.514.866.634 1.44.753 3.241.753 3.241a1.206 1.206 0 0 0 1.285 1.122 1.207 1.207 0 0 0 1.12-1.287s-.16-2.25-.952-4.05C10.744 6.364 9.594 5.208 8 5.208c-1.594 0-2.744 1.156-3.424 2.7-.792 1.8-.951 4.05-.951 4.05a1.207 1.207 0 0 0 1.12 1.288 1.206 1.206 0 0 0 1.284-1.122s.119-1.8.753-3.24a3.52 3.52 0 0 1 .514-.867c.187-.22.406-.394.704-.394Z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M5.973 11.669 3.352 3.585a1.205 1.205 0 1 0-2.293.746l2.622 8.084a1.205 1.205 0 1 0 2.292-.746Z" clip-rule="evenodd"/></svg>' className="w-html-embed c1jru4eg c10c7zpi cvjor4z c1j8ubra" />
              <div className="w-element">
                {"Xây dựng bởi ThanhThong"}
              </div>
            </a>
          </Fragment_1>
        </Slot>
      </Box>
      <Box className="w-box c11lapjv c1tmx3h cjgcbjj cejhttc chvjn1z c7p2prc czw8boz" />
    </Body>
  );
};

export { Page };