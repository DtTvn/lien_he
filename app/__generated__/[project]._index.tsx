/* eslint-disable */
/* This is an auto-generated file for building the project */

import { Fragment, useState } from "react";
import { useResource, useVariableState } from "@webstudio-is/react-sdk/runtime";
import { Box, Fragment as Fragment_1, Text, Link, Heading, Slot, Body, Image, HtmlEmbed, Button, Paragraph } from "@webstudio-is/sdk-components-react";
import { Dialog, DialogTrigger, DialogOverlay, DialogContent, DialogClose } from "@webstudio-is/sdk-components-react-radix";

export const projectId = "fd3eec37-dc19-49f8-8c38-1b3480b70545";

export const lastPublished = "2025-07-13T08:17:31.514Z";

export const siteName = undefined;

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
  "Portfolio__Icon_VC6lMDbymwZEJV7H7JBQ3.svg",
  "Contact_Icon_White_67_HWShh4J6gTKgI61jvg.svg"
];

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
        <Box className="w-box c3lk5pa c1eq3wrs c6b6nxe c8nk80o c1a6r51h cyrajba citcu8z c15cspf0 c6kwm01 c61x9or c18m0pjh c7in0j3 c14cp74y c1cnh0oy c1hfs0g9 cuyrjma">
          <Box className="w-box c88nee9 culjnom c1j8ubra c1ks3y07 c1mpch1f c1d3r4j5 c8nk80o c14pfhm5 c1a6r51h cyrajba cbjhg1z c30l9u4 cuu498a">
            <Box className="w-box c8nk80o c14pfhm5 cqq2eg1 c18xl9bf">
              <Heading className="w-heading cgiqncz cuuasv7 c1lywmer c1e75frj c1we5scq">
                {"Công Nghiệp Sang Trọng: Biến Đổi Không Gian Nhà Kho Thành Văn Phòng Loft Phong Cách"}
              </Heading>
              <Paragraph className="w-paragraph cgiqncz cuuasv7">
                {"Biến đổi một không gian nhà kho rộng lớn thành văn phòng loft phong cách để khơi dậy sáng tạo và thúc đẩy sự hợp tác"}
              </Paragraph>
            </Box>
            <Box className="w-box c1ytpk7j cp19w54 c8nk80o c1n9yegh c1f37pet c14pfhm5 c6mllus c2y17za c19jgd6p">
              <Box className="w-box c8nk80o c14pfhm5 c1n9yegh c1f37pet culjnom c1j8ubra">
                <Text className="w-text">
                  {"Khách Hàng: Giải Pháp Sáng Tạo Agency"}
                  <br />
                  {"Danh Mục: Thương Mại"}
                </Text>
                <Text className="w-text">
                  {"Ngày Phát Hành: 12 Tháng 4, 2023"}
                </Text>
              </Box>
              <Text className="w-text culjnom c1j8ubra">
                {"Đóng Góp:"}
                <br />
                {"Thiết Kế Ghế Sofa: Bartolomeo Carrol"}
                <br />
                {"Dàn Dựng: Marina Norbert"}
                <br />
                {"Nhiếp Ảnh: Jeannie Kidist"}
              </Text>
            </Box>
          </Box>
          <Box className="w-box c8nk80o c14pfhm5 c1a6r51h cyrajba">
            <Box className="w-box c8nk80o c14pfhm5 c1n9yegh c1f37pet">
              <Box className="w-box c68bo36 c1qutx8k c1outejm c1igsn7p">
                <Image src="/assets/paul-weaver-nWidMEQsnAQ-unsplash_Hd9bvJ49YlnnKKVNOBIT4.jpeg" className="w-image c68bo36 c1661bk4 c1ttc2dv c8fybya" />
              </Box>
              <Box className="w-box c18m0pjh c1n9yegh c1f37pet c8nk80o">
                <Box className="w-box c68bo36 c1fyjyvq">
                  <Image src="/assets/kara-eads-L7EwHkq1B2s-unsplash_hZnqf6_CYa3hSkI38E38B.jpg" className="w-image c68bo36 c1661bk4 c1ttc2dv" />
                </Box>
                <Box className="w-box c68bo36 c1fyjyvq">
                  <Image src="/assets/earl-wilcox-3xpQCOOe6hM-unsplash_2NerSMvO382JJHUQu1XdM.jpg" className="w-image c68bo36 c1661bk4 c1ttc2dv" />
                </Box>
              </Box>
            </Box>
            <Box className="w-box c8nk80o c14pfhm5 cnhmrg7 cv8693i">
              <Text className="w-text c1ytpk7j cp19w54 c6mllus">
                {"Giới Thiệu Dự Án"}
              </Text>
              <Paragraph className="w-paragraph cgiqncz cuuasv7">
                {"Khái niệm thiết kế tập trung vào việc giữ nét đặc trưng công nghiệp của không gian trong khi kết hợp các yếu tố hiện đại. Chúng tôi đã tái định hình các bức tường bê tông thô và hệ thống ống dẫn lộ thiên như các đặc điểm thiết kế, làm nổi bật vẻ đẹp vốn có của chúng. Để tăng cường ánh sáng tự nhiên và tạo không khí mở, các cửa sổ lớn đã được lắp đặt, cho phép không gian tràn ngập ánh sáng ban ngày."}
              </Paragraph>
            </Box>
            <Box className="w-box c8nk80o c14pfhm5 c1n9yegh c1f37pet">
              <Box className="w-box">
                <Image src="/assets/lakeisha-bennett-WzP3YnV9T-U-unsplash_KqsPo2JMqnCIIap7zS7Cb.jpg" className="w-image c68bo36 c1661bk4 c1ttc2dv c1xkrcu9 c1igsn7p" />
              </Box>
              <Box className="w-box">
                <Image src="/assets/spacejoy-9M66C_w_ToM-unsplash_-2-5_TNecwsjZ5uxYh0DK.jpg" className="w-image c68bo36 c1661bk4 c1ttc2dv cimhlci c1igsn7p" />
              </Box>
              <Box className="w-box">
                <Image src="/assets/toa-heftiba-FV3GConVSss-unsplash_8-PVVNvxXIt_GxAes0rKV.jpeg" className="w-image c68bo36 c1661bk4 c1ttc2dv c8fybya c1igsn7p" />
              </Box>
            </Box>
            <Box className="w-box c8nk80o c14pfhm5 cnhmrg7 cv8693i">
              <Text className="w-text c1ytpk7j cp19w54 c6mllus">
                {"Kết Quả"}
              </Text>
              <Paragraph className="w-paragraph cgiqncz cuuasv7">
                {"Sau khi hoàn thành, không gian nhà kho được biến đổi thành một văn phòng loft nổi bật và tiện dụng, hoàn toàn phù hợp với tầm nhìn của Giải Pháp Sáng Tạo Agency. Dự án nhận được nhiều lời khen ngợi từ khách hàng, với nhân viên bày tỏ sự hào hứng về môi trường truyền cảm hứng, khuyến khích sự hợp tác và đổi mới."}
              </Paragraph>
            </Box>
          </Box>
        </Box>
        <Slot>
          <Fragment_1>
            <Box className="w-box chvjn1z c7p2prc">
              <Box className="w-box c1bsu9b6 c1nt4a8i c3lk5pa c1eq3wrs c6b6nxe c1rllvmm co923ah c15cspf0 c6kwm01 c18m0pjh c7in0j3 c14cp74y c1hfs0g9 cuyrjma">
                <Heading className="w-heading cub4387 c1k14icg cgiqncz cuuasv7 c1lywmer c1e75frj c8nk80o c1n9yegh cyrajba c15lgcvk c1we5scq c2ueoyp c18m0pjh">
                  {"Quan Tâm Đến Hợp Tác?"}
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
                    {"Liên Hệ Hôm Nay"}
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
                    {"Danh Mục Cá Nhân của Đỗ Thành Thông"}
                  </Heading>
                  <Text className="w-text c1ytpk7j c6mllus c1i2stb4">
                    {"Bản quyền mọi nội dung © 2023 Webstudio Inc."}
                    <br />
                    {"Mẫu này được tạo bằng Webstudio!"}
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