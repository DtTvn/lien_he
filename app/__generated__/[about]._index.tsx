/* eslint-disable */
/* This is an auto-generated file for building the project */

import { Fragment, useState } from "react";
import { useResource, useVariableState } from "@webstudio-is/react-sdk/runtime";
import { Box, Fragment as Fragment_1, Text, Link, Heading, Slot, Body, Paragraph, Image, HtmlEmbed, Button, Separator } from "@webstudio-is/sdk-components-react";
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
                      <Box className="w-box" tabIndex={0} />
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
          <Box className="w-box c8nk80o c14pfhm5 c1n9yegh c1f37pet c7p2prc c42d2do">
            <Heading className="w-heading cgiqncz cuuasv7 c8nk80o c14pfhm5">
              <Text className="w-text c1ol8vgd c15lgcvk c1lywmer c1ivme3m cd1rmow c1e3pejf c1t418cu ct22p2k cfzi32s c8og876 c140jchj">
                {"Tôi là Đỗ Thành Thông, một"}
              </Text>
              <Text className="w-text c1ol8vgd c15lgcvk c1lywmer c1ivme3m cd1rmow c1e3pejf c1t418cu ct22p2k cfzi32s c8og876 c140jchj">
                {"Nhà Thiết Kế Web"}
              </Text>
              <Text className="w-text c1ol8vgd c15lgcvk c1lywmer c1ivme3m cd1rmow c1e3pejf c1t418cu ct22p2k cfzi32s c8og876 c140jchj">
                {"Từ Hà Nội"}
              </Text>
            </Heading>
            <Box className="w-box c1qk1h6g c1osc9n6 c1t7dt52 c8nk80o c14pfhm5 cif6wt1 cuj7ci7">
              <Box className="w-box cq68ihc c8nk80o c1fcxglx c1w3kf2q">
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
            </Box>
          </Box>
          <Box className="w-box c68bo36 c1661bk4 c1qutx8k c1outejm">
            <Image src="/assets/austin-wade-98RLHBWGswE-unsplash_aAazBi9fRwzaFviNmWLUu.jpg" className="w-image c68bo36 c1ttc2dv c1661bk4 c8fybya cyf1te5" />
          </Box>
        </Box>
        <Box className="w-box c7p2prc c42d2do c14pfhm5 csgrrs c363nkm cyw754m c199s1ik">
          <Box className="w-box c3lk5pa c1eq3wrs c6b6nxe c8nk80o c14pfhm5 cswqhtm cty76jx citcu8z c15cspf0 c6kwm01 c18m0pjh c7in0j3 c14cp74y c1hfs0g9 cuyrjma czn5lo9 c12f1nir">
            <Box className="w-box c1n9yegh c1f37pet c8nk80o">
              <Box className="w-box c1a6r51h cyrajba c8nk80o c14pfhm5 cc3q8ja c7d3819 c68bo36 c5alcd0 c17nieo8">
                <Box className="w-box c10ekkc7 c5alcd0 c17nieo8 c1rzjbxv c12librc c1mv0i7u">
                  <Box className="w-box cfb835f c1ybg9qj c13pijs9 c1qutx8k c1outejm c1vu9gqi c1pfq0j cqxvbv4 cp7gzre c1gvivty">
                    <Image src="/assets/austin-wade-X6Uj51n5CE8-unsplash_59qxcdMMHV3PiWJ1NzE2f.jpg" className="w-image cq68ihc cs9h3tm c68bo36 c1661bk4 c1ttc2dv c8hnpv4" />
                  </Box>
                  <Heading className="w-heading c1lywmer ce8e3ub cgiqncz cuuasv7 cf91v3h">
                    {"Xin Chào!"}
                  </Heading>
                </Box>
                <Paragraph className="w-paragraph cgiqncz cuuasv7">
                  {"Tôi là Đỗ Thành Thông, một nhà thiết kế web tại Hà Nội. Tôi tạo ra những website đẹp mắt và hiệu quả, biến ý tưởng thành các giao diện số ấn tượng, luôn tìm kiếm cảm hứng từ công nghệ và xu hướng thiết kế mới nhất. Hợp tác là chìa khóa—Tôi làm việc chặt chẽ với khách hàng, lập trình viên và nhà thiết kế khác. Dù là đi bộ đường dài hay lập trình, tôi tin vào việc tạo ra những sản phẩm truyền cảm hứng và tiện dụng. Nếu bạn muốn một nhà thiết kế đam mê, chú trọng chi tiết và sáng tạo, hãy cùng hợp tác để tạo ra điều gì đó phi thường!"}
                </Paragraph>
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
              <Box className="w-box c1i2stb4 c1qutx8k c1outejm c68bo36">
                <Image src="/assets/anhbanthan.jpg" className="w-image cq68ihc cs9h3tm c68bo36 c1661bk4 c1ttc2dv c1nsr10o" />
              </Box>
            </Box>
            <Separator className="w-separator c68bo36" />
            <Box className="w-box c8nk80o c14pfhm5 c1a6r51h cyrajba c68bo36">
              <Heading className="w-heading cgiqncz cuuasv7 c1lywmer ce8e3ub cf91v3h">
                {"Kinh Nghiệm Gần Đây"}
              </Heading>
              <Box className="w-box c8nk80o c1n9yegh cyrajba c61x9or">
                <Box className="w-box c8nk80o c14pfhm5 cqq2eg1 c18xl9bf c68bo36">
                  <Box className="w-box c8nk80o c14pfhm5 cnhmrg7 cv8693i">
                    <Text className="w-text c1lywmer">
                      {"Nhà Thiết Kế Web"}
                    </Text>
                    <Box className="w-box cuj7ci7 c8nk80o c14pfhm5 cqrult6 cc3q8ja c1n9yegh cv8693i">
                      <Box className="w-box cp19w54 c8nk80o c14pfhm5 cqrult6 cc3q8ja ceob71o cyvk86c c2y17za">
                        <Text className="w-text c1ytpk7j c1lywmer c6mllus">
                          {"ABC Design Studio"}
                        </Text>
                        <Text className="w-text c1ytpk7j c6mllus">
                          {"Hà Nội, Việt Nam"}
                        </Text>
                      </Box>
                      <Box className="w-box cp19w54 c8nk80o cqrult6 ceob71o cyvk86c">
                        <Text className="w-text c1ytpk7j c6mllus">
                          {"2021"}
                        </Text>
                        <Separator className="w-separator coroqdi cwldcls c1fmpgni cgiqncz cuuasv7 ctusadg" />
                        <Text className="w-text c1ytpk7j c6mllus">
                          {"Hiện Tại"}
                        </Text>
                      </Box>
                    </Box>
                  </Box>
                  <Paragraph className="w-paragraph cgiqncz cuuasv7">
                    {"Hợp tác với nhóm phát triển tại ABC, tôi thiết kế và phát triển các giao diện web responsive, tối ưu hóa trải nghiệm người dùng và tích hợp các công nghệ hiện đại như React và Tailwind CSS."}
                  </Paragraph>
                </Box>
                <Box className="w-box c8nk80o c14pfhm5 cqq2eg1 c18xl9bf c68bo36">
                  <Box className="w-box c8nk80o c14pfhm5 cnhmrg7 cv8693i">
                    <Text className="w-text c1lywmer">
                      {"Nhà Thiết Kế Web"}
                    </Text>
                    <Box className="w-box cuj7ci7 c8nk80o c14pfhm5 cqrult6 cc3q8ja c1n9yegh cv8693i">
                      <Box className="w-box cp19w54 c8nk80o c14pfhm5 cqrult6 cc3q8ja ceob71o cyvk86c c2y17za">
                        <Text className="w-text c1ytpk7j c1lywmer c6mllus">
                          {"DEF Design Studio"}
                        </Text>
                        <Text className="w-text c1ytpk7j c6mllus">
                          {"Hà Nội, Việt Nam"}
                        </Text>
                      </Box>
                      <Box className="w-box cp19w54 c8nk80o cqrult6 ceob71o cyvk86c">
                        <Text className="w-text c1ytpk7j c6mllus">
                          {"2018"}
                        </Text>
                        <Separator className="w-separator coroqdi cwldcls c1fmpgni cgiqncz cuuasv7 ctusadg" />
                        <Text className="w-text c1ytpk7j c6mllus">
                          {"2021"}
                        </Text>
                      </Box>
                    </Box>
                  </Box>
                  <Paragraph className="w-paragraph cgiqncz cuuasv7">
                    {"Tôi làm việc cùng đội ngũ để tạo ra các website thương mại điện tử, tập trung vào thiết kế giao diện trực quan và tối ưu hóa hiệu suất, sử dụng HTML, CSS, JavaScript và các framework như Vue.js."}
                  </Paragraph>
                </Box>
                <Box className="w-box c8nk80o c14pfhm5 cqq2eg1 c18xl9bf c68bo36">
                  <Box className="w-box c8nk80o c14pfhm5 cnhmrg7 cv8693i">
                    <Text className="w-text c1lywmer">
                      {"Dự Án Cá Nhân: Portfolio Website"}
                    </Text>
                    <Box className="w-box cuj7ci7 c8nk80o c14pfhm5 cqrult6 cc3q8ja c1n9yegh cv8693i">
                      <Box className="w-box cp19w54 c8nk80o c14pfhm5 cqrult6 cc3q8ja ceob71o cyvk86c c2y17za">
                        <Text className="w-text c1ytpk7j c1lywmer c6mllus">
                          {"Cá Nhân"}
                        </Text>
                        <Text className="w-text c1ytpk7j c6mllus">
                          {"Hà Nội, Việt Nam"}
                        </Text>
                      </Box>
                      <Box className="w-box cp19w54 c8nk80o cqrult6 ceob71o cyvk86c">
                        <Text className="w-text c1ytpk7j c6mllus">
                          {"2023"}
                        </Text>
                        <Separator className="w-separator coroqdi cwldcls c1fmpgni cgiqncz cuuasv7 ctusadg" />
                        <Text className="w-text c1ytpk7j c6mllus">
                          {"Hiện Tại"}
                        </Text>
                      </Box>
                    </Box>
                  </Box>
                  <Paragraph className="w-paragraph cgiqncz cuuasv7">
                    {"Phát triển một trang portfolio cá nhân sử dụng React và Webstudio để thể hiện các dự án thiết kế web của tôi, tập trung vào thiết kế tối giản và trải nghiệm người dùng mượt mà."}
                  </Paragraph>
                </Box>
              </Box>
            </Box>
            <Separator className="w-separator c68bo36" />
            <Box className="w-box c8nk80o c14pfhm5 c68bo36 c1a6r51h cyrajba">
              <Heading className="w-heading cgiqncz cuuasv7 c1lywmer ce8e3ub cf91v3h">
                {"Lời Chứng Thực"}
              </Heading>
              <Slot>
                {/* <Fragment_1> */}
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
                              {"ABC Design Studio"}
                            </Text>
                          </Box>
                        </Box>
                      </Box>
                      <Paragraph className="w-paragraph cgiqncz cuuasv7">
                        {"Trong suốt thời gian làm việc tại công ty chúng tôi, Đỗ Thành Thông đã thể hiện kỹ năng thiết kế web xuất sắc và sự chú trọng đến chi tiết."}
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
                              {"ABC Design Studio"}
                            </Text>
                          </Box>
                        </Box>
                      </Box>
                      <Paragraph className="w-paragraph cgiqncz cuuasv7">
                        {"Họ liên tục mang đến các giao diện web sáng tạo, nắm bắt tầm nhìn của khách hàng và vượt qua kỳ vọng của họ."}
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
                        {"Đỗ Thành Thông đã xây dựng mối quan hệ tuyệt vời với khách hàng, các bên liên quan và thành viên trong nhóm."}
                      </Paragraph>
                    </Box>
                    <Box className="w-box c8nk80o c14pfhm5 c68bo36 cqq2eg1 c18xl9bf">
                      <Box className="w-box c8nk80o c13x75cb cyqg6ud cqq2eg1 cv8693i">
                        <Box className="w-box c1lr5y2d c1lrid cxfkus7 c13xknd8 cq8x19e crx3gtk c1qutx8k c1outejm">
                          <Image src="/assets/leilani-angel-K84vnnzxmTQ-unsplash_2GrD75_kxkAU-s50UEiSv.jpeg" className="w-image c68bo36 c1661bk4 c1ttc2dv c1fyjyvq" />
                        </Box>
                        <Box className="w-box c8nk80o c14pfhm5 ceob71o c1gzwxt8">
                          <Text className="w-text c1lywmer">
                            {"Benjamin Clarke"}
                          </Text>
                          <Box className="w-box cp19w54 c8nk80o c14pfhm5 cc3q8ja ceob71o cyvk86c c2y17za c18m0pjh">
                            <Text className="w-text c1ytpk7j c1lywmer c6mllus">
                              {"Trưởng Nhóm Dự Án"}
                            </Text>
                            <Text className="w-text c1ytpk7j c6mllus">
                              {"DEF Design Studio"}
                            </Text>
                          </Box>
                        </Box>
                      </Box>
                      <Paragraph className="w-paragraph cgiqncz cuuasv7">
                        {"Kỹ năng kỹ thuật của Đỗ Thành Thông trong các công cụ thiết kế web như Figma và các framework như React đã đóng vai trò quan trọng trong đội ngũ."}
                      </Paragraph>
                    </Box>
                    <Box className="w-box c8nk80o c14pfhm5 c68bo36 cqq2eg1 c18xl9bf">
                      <Box className="w-box c8nk80o c13x75cb cyqg6ud cqq2eg1 cv8693i">
                        <Box className="w-box c1lr5y2d c1lrid cxfkus7 c13xknd8 cq8x19e crx3gtk c1qutx8k c1outejm">
                          <Image src="/assets/edward-cisneros-_H6wpor9mjs-unsplash_RNG4L2NQc3d4qMDVpLDgh.jpeg" className="w-image c68bo36 c1661bk4 c1ttc2dv c1fyjyvq" />
                        </Box>
                        <Box className="w-box c8nk80o c14pfhm5 ceob71o c1gzwxt8">
                          <Text className="w-text c1lywmer">
                            {"Ava Anderson"}
                          </Text>
                          <Box className="w-box cp19w54 c8nk80o c14pfhm5 cc3q8ja ceob71o cyvk86c c2y17za c18m0pjh">
                            <Text className="w-text c1ytpk7j c1lywmer c6mllus">
                              {"Giám Đốc Sáng Tạo"}
                            </Text>
                            <Text className="w-text c1ytpk7j c6mllus">
                              {"ABC Design Studio"}
                            </Text>
                          </Box>
                        </Box>
                      </Box>
                      <Paragraph className="w-paragraph cgiqncz cuuasv7">
                        {"Trong suốt thời gian làm việc tại công ty chúng tôi, Đỗ Thành Thông đã thể hiện kỹ năng thiết kế web xuất sắc và sự chú trọng đến chi tiết."}
                      </Paragraph>
                    </Box>
                    <Box className="w-box c8nk80o c14pfhm5 c68bo36 cqq2eg1 c18xl9bf">
                      <Box className="w-box c8nk80o c13x75cb cyqg6ud cqq2eg1 cv8693i">
                        <Box className="w-box c1lr5y2d c1lrid cxfkus7 c13xknd8 cq8x19e crx3gtk c1qutx8k c1outejm">
                          <Image src="/assets/charlesdeluvio-K4mSJ7kc0As-unsplash_5O1nxK3_r99x4YBa4bM_F.jpeg" className="w-image c68bo36 c1661bk4 c1ttc2dv c1fyjyvq" />
                        </Box>
                        <Box className="w-box c8nk80o c14pfhm5 ceob71o c1gzwxt8">
                          <Text className="w-text c1lywmer">
                            {"Leonard Cohen"}
                          </Text>
                          <Box className="w-box cp19w54 c8nk80o c14pfhm5 cc3q8ja ceob71o cyvk86c c2y17za c18m0pjh">
                            <Text className="w-text c1ytpk7j c1lywmer c6mllus">
                              {"Giám Đốc Hạnh Phúc"}
                            </Text>
                            <Text className="w-text c1ytpk7j c6mllus">
                              {"ABC Design Studio"}
                            </Text>
                          </Box>
                        </Box>
                      </Box>
                      <Paragraph className="w-paragraph cgiqncz cuuasv7">
                        {"Chuyên môn, sự chuyên nghiệp và đam mê thực sự của họ đối với thiết kế web khiến họ trở thành tài sản vô giá cho bất kỳ đội ngũ nào."}
                      </Paragraph>
                    </Box>
                  </Box>
                </Slot>
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
        </Box>
      </Body>
    );
};

export { Page };