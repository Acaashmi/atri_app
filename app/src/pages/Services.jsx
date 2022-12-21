import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex as Flex1 } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { TextBox as TextBox1 } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Image as Image1 } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { useFlex8Cb, useFlex9Cb, useFlex10Cb, useFlex11Cb, useFlex12Cb, useFlex15Cb, useFlex13Cb, useFlex14Cb, useTextBox10Cb, useTextBox11Cb, useTextBox12Cb, useImage4Cb, useTextBox13Cb, useTextBox16Cb, useImage5Cb, useTextBox14Cb, useTextBox17Cb, useImage6Cb, useTextBox15Cb, useTextBox18Cb } from "../page-cbs/services";
import "../page-css/services.css";
import "../custom/services";

export default function Services() {
  const navigate = useNavigate();
  useEffect(() => {
    const unsub = subscribeInternalNavigation((url) => {
      navigate(url);
    });
    return unsub;
  }, [navigate]);

  const location = useLocation();
  useLayoutEffect(()=>{
    fetchPageProps(location.pathname, location.search).then((res)=>{
      updateStoreStateFromController(res.pageName, res.pageState)
    })
  }, [location])

  const Flex8Props = useStore((state)=>state["services"]["Flex8"]);
const Flex8IoProps = useIoStore((state)=>state["services"]["Flex8"]);
const Flex8Cb = useFlex8Cb()
const Flex9Props = useStore((state)=>state["services"]["Flex9"]);
const Flex9IoProps = useIoStore((state)=>state["services"]["Flex9"]);
const Flex9Cb = useFlex9Cb()
const Flex10Props = useStore((state)=>state["services"]["Flex10"]);
const Flex10IoProps = useIoStore((state)=>state["services"]["Flex10"]);
const Flex10Cb = useFlex10Cb()
const Flex11Props = useStore((state)=>state["services"]["Flex11"]);
const Flex11IoProps = useIoStore((state)=>state["services"]["Flex11"]);
const Flex11Cb = useFlex11Cb()
const Flex12Props = useStore((state)=>state["services"]["Flex12"]);
const Flex12IoProps = useIoStore((state)=>state["services"]["Flex12"]);
const Flex12Cb = useFlex12Cb()
const Flex15Props = useStore((state)=>state["services"]["Flex15"]);
const Flex15IoProps = useIoStore((state)=>state["services"]["Flex15"]);
const Flex15Cb = useFlex15Cb()
const Flex13Props = useStore((state)=>state["services"]["Flex13"]);
const Flex13IoProps = useIoStore((state)=>state["services"]["Flex13"]);
const Flex13Cb = useFlex13Cb()
const Flex14Props = useStore((state)=>state["services"]["Flex14"]);
const Flex14IoProps = useIoStore((state)=>state["services"]["Flex14"]);
const Flex14Cb = useFlex14Cb()
const TextBox10Props = useStore((state)=>state["services"]["TextBox10"]);
const TextBox10IoProps = useIoStore((state)=>state["services"]["TextBox10"]);
const TextBox10Cb = useTextBox10Cb()
const TextBox11Props = useStore((state)=>state["services"]["TextBox11"]);
const TextBox11IoProps = useIoStore((state)=>state["services"]["TextBox11"]);
const TextBox11Cb = useTextBox11Cb()
const TextBox12Props = useStore((state)=>state["services"]["TextBox12"]);
const TextBox12IoProps = useIoStore((state)=>state["services"]["TextBox12"]);
const TextBox12Cb = useTextBox12Cb()
const Image4Props = useStore((state)=>state["services"]["Image4"]);
const Image4IoProps = useIoStore((state)=>state["services"]["Image4"]);
const Image4Cb = useImage4Cb()
const TextBox13Props = useStore((state)=>state["services"]["TextBox13"]);
const TextBox13IoProps = useIoStore((state)=>state["services"]["TextBox13"]);
const TextBox13Cb = useTextBox13Cb()
const TextBox16Props = useStore((state)=>state["services"]["TextBox16"]);
const TextBox16IoProps = useIoStore((state)=>state["services"]["TextBox16"]);
const TextBox16Cb = useTextBox16Cb()
const Image5Props = useStore((state)=>state["services"]["Image5"]);
const Image5IoProps = useIoStore((state)=>state["services"]["Image5"]);
const Image5Cb = useImage5Cb()
const TextBox14Props = useStore((state)=>state["services"]["TextBox14"]);
const TextBox14IoProps = useIoStore((state)=>state["services"]["TextBox14"]);
const TextBox14Cb = useTextBox14Cb()
const TextBox17Props = useStore((state)=>state["services"]["TextBox17"]);
const TextBox17IoProps = useIoStore((state)=>state["services"]["TextBox17"]);
const TextBox17Cb = useTextBox17Cb()
const Image6Props = useStore((state)=>state["services"]["Image6"]);
const Image6IoProps = useIoStore((state)=>state["services"]["Image6"]);
const Image6Cb = useImage6Cb()
const TextBox15Props = useStore((state)=>state["services"]["TextBox15"]);
const TextBox15IoProps = useIoStore((state)=>state["services"]["TextBox15"]);
const TextBox15Cb = useTextBox15Cb()
const TextBox18Props = useStore((state)=>state["services"]["TextBox18"]);
const TextBox18IoProps = useIoStore((state)=>state["services"]["TextBox18"]);
const TextBox18Cb = useTextBox18Cb()

  return (<>
  <Flex1 className="p-services Flex8 bpt" {...Flex8Props} {...Flex8Cb} {...Flex8IoProps}>
<TextBox1 className="p-services TextBox10 bpt" {...TextBox10Props} {...TextBox10Cb} {...TextBox10IoProps}/>
</Flex1>
<Flex1 className="p-services Flex9 bpt" {...Flex9Props} {...Flex9Cb} {...Flex9IoProps}>
<TextBox1 className="p-services TextBox11 bpt" {...TextBox11Props} {...TextBox11Cb} {...TextBox11IoProps}/>
</Flex1>
<Flex1 className="p-services Flex10 bpt" {...Flex10Props} {...Flex10Cb} {...Flex10IoProps}>
<TextBox1 className="p-services TextBox12 bpt" {...TextBox12Props} {...TextBox12Cb} {...TextBox12IoProps}/>
</Flex1>
<Flex1 className="p-services Flex11 bpt" {...Flex11Props} {...Flex11Cb} {...Flex11IoProps}>
<Flex1 className="p-services Flex12 bpt" {...Flex12Props} {...Flex12Cb} {...Flex12IoProps}>
<Flex1 className="p-services Flex15 bpt" {...Flex15Props} {...Flex15Cb} {...Flex15IoProps}>
<Image1 className="p-services Image4 bpt" {...Image4Props} {...Image4Cb} {...Image4IoProps}/>
<TextBox1 className="p-services TextBox13 bpt" {...TextBox13Props} {...TextBox13Cb} {...TextBox13IoProps}/>
<TextBox1 className="p-services TextBox16 bpt" {...TextBox16Props} {...TextBox16Cb} {...TextBox16IoProps}/>
</Flex1>
</Flex1>
<Flex1 className="p-services Flex13 bpt" {...Flex13Props} {...Flex13Cb} {...Flex13IoProps}>
<Image1 className="p-services Image5 bpt" {...Image5Props} {...Image5Cb} {...Image5IoProps}/>
<TextBox1 className="p-services TextBox14 bpt" {...TextBox14Props} {...TextBox14Cb} {...TextBox14IoProps}/>
<TextBox1 className="p-services TextBox17 bpt" {...TextBox17Props} {...TextBox17Cb} {...TextBox17IoProps}/>
</Flex1>
<Flex1 className="p-services Flex14 bpt" {...Flex14Props} {...Flex14Cb} {...Flex14IoProps}>
<Image1 className="p-services Image6 bpt" {...Image6Props} {...Image6Cb} {...Image6IoProps}/>
<TextBox1 className="p-services TextBox15 bpt" {...TextBox15Props} {...TextBox15Cb} {...TextBox15IoProps}/>
<TextBox1 className="p-services TextBox18 bpt" {...TextBox18Props} {...TextBox18Cb} {...TextBox18IoProps}/>
</Flex1>
</Flex1>
  </>);
}
