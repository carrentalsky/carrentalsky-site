"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type VipCarsPage = "step1" | "step2" | "managebooking";

type VipCarsDefaultValues = {
  affiliate_id: string;
  aff_tid: string;
  page: VipCarsPage;
  div_id: "bookingengine";
  step2Url: string;
  terms_page?: string;
  privacy_page?: string;
  manage_booking_page?: string;
  formType?: string;
  language?: string;
  currency?: string;
  show_multilingual?: string;
  pickup_country?: string;
  pickup_city?: string;
  pickup_loc?: string;
  unsubscribe_page?: string;
  hide_insurance?: string;
};

declare global {
  interface Window {
    default_values?: VipCarsDefaultValues;
    jQuery?: unknown;
    $?: unknown;
    someObject?: unknown;
  }
}

const affiliateId = "vip_3363";
const trackingId = "qGaZk837643178";
const widgetDivId = "bookingengine";
const vipScriptUrl = "https://res.supplycars.com/jsbookingengine/script1.js?v=0.04";
const jqueryUrl = "https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js";
const searchUrl = "https://www.carrentalsky.com/search";
const manageBookingUrl = "https://www.carrentalsky.com/manage-booking";
const termsUrl = "https://www.carrentalsky.com/terms-and-conditions";

let jqueryPromise: Promise<void> | null = null;
let activeWidgetToken: symbol | null = null;
let vipBootstrapScript: HTMLScriptElement | null = null;

function loadScriptOnce(src: string, id: string) {
  if (typeof window === "undefined") {
    return Promise.resolve();
  }

  const existing = document.getElementById(id) as HTMLScriptElement | null;
  if (existing) {
    return Promise.resolve();
  }

  return new Promise<void>((resolve, reject) => {
    const script = document.createElement("script");
    script.id = id;
    script.src = src;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error(`Unable to load ${src}`));
    document.head.appendChild(script);
  });
}

function loadJQuery() {
  if (typeof window === "undefined") {
    return Promise.resolve();
  }

  if (window.jQuery && window.$) {
    return Promise.resolve();
  }

  jqueryPromise ??= loadScriptOnce(jqueryUrl, "carrentalsky-jquery");
  return jqueryPromise;
}

function cleanupVipArtifacts() {
  if (typeof document === "undefined") {
    return;
  }

  document
    .querySelectorAll(
      ".calentim-container, .calentim-container-mobile, .calentim-overlay, .select2-drop, .be_modal-backdrop"
    )
    .forEach((node) => node.remove());
}

function hasLoadedWidgetContent(container: HTMLElement) {
  const meaningfulChildren = Array.from(container.children).filter(
    (child) => child.id !== "supplycars_page_loader"
  );

  return meaningfulChildren.length > 0 || Boolean(container.textContent?.trim());
}

function createDefaultValues(page: VipCarsPage): VipCarsDefaultValues {
  if (page === "step1") {
    return {
      affiliate_id: affiliateId,
      aff_tid: trackingId,
      page,
      step2Url: searchUrl,
      terms_page: termsUrl,
      formType: "form6",
      language: "en",
      currency: "",
      show_multilingual: "0",
      pickup_country: "",
      pickup_city: "",
      pickup_loc: "",
      privacy_page: "",
      unsubscribe_page: "",
      div_id: widgetDivId
    };
  }

  if (page === "step2") {
    return {
      affiliate_id: affiliateId,
      aff_tid: trackingId,
      page,
      manage_booking_page: manageBookingUrl,
      hide_insurance: "0",
      step2Url: searchUrl,
      div_id: widgetDivId
    };
  }

  return {
    affiliate_id: affiliateId,
    aff_tid: trackingId,
    page,
    language: "en",
    show_multilingual: "0",
    manage_booking_page: manageBookingUrl,
    terms_page: termsUrl,
    step2Url: searchUrl,
    div_id: widgetDivId
  };
}

function runVipBootstrap(values: VipCarsDefaultValues) {
  window.default_values = values;
  delete window.someObject;

  if (vipBootstrapScript) {
    vipBootstrapScript.remove();
    vipBootstrapScript = null;
  }

  return new Promise<void>((resolve, reject) => {
    const script = document.createElement("script");
    script.id = "carrentalsky-vipcars-bootstrap";
    script.src = `${vipScriptUrl}&_=${Date.now()}`;
    script.async = true;
    script.dataset.vipcarsBootstrap = "true";
    script.onload = () => resolve();
    script.onerror = () => reject(new Error(`Unable to load ${vipScriptUrl}`));
    vipBootstrapScript = script;
    document.body.appendChild(script);
  });
}

type VipCarsWidgetProps = {
  page: VipCarsPage;
  className?: string;
};

export function VipCarsWidget({ page, className = "" }: VipCarsWidgetProps) {
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");
  const containerRef = useRef<HTMLDivElement>(null);
  const values = useMemo(() => createDefaultValues(page), [page]);

  useEffect(() => {
    let cancelled = false;
    const container = containerRef.current;
    const token = Symbol(page);
    setStatus("loading");

    if (!container) {
      setStatus("error");
      return;
    }

    const widgetContainer = container;
    activeWidgetToken = token;

    document.body.classList.add("vipcars-widget-active");
    widgetContainer.innerHTML = "";
    cleanupVipArtifacts();

    const observer = new MutationObserver(() => {
      if (!cancelled && hasLoadedWidgetContent(widgetContainer)) {
        setStatus("ready");
      }
    });

    observer.observe(widgetContainer, { childList: true, subtree: true });

    const timeout = window.setTimeout(() => {
      if (!cancelled && !hasLoadedWidgetContent(widgetContainer)) {
        setStatus("error");
      }
    }, 18000);

    async function initialiseWidget() {
      try {
        await loadJQuery();

        if (cancelled) {
          return;
        }

        await runVipBootstrap(values);

        if (!cancelled && hasLoadedWidgetContent(widgetContainer)) {
          setStatus("ready");
        }
      } catch (error) {
        console.error(error);
        if (!cancelled) {
          setStatus("error");
        }
      }
    }

    void initialiseWidget();

    return () => {
      cancelled = true;
      window.clearTimeout(timeout);
      observer.disconnect();
      if (activeWidgetToken === token) {
        activeWidgetToken = null;
        widgetContainer.innerHTML = "";
        cleanupVipArtifacts();
        document.body.classList.remove("vipcars-widget-active");
      }
    };
  }, [values]);

  return (
    <div className={`vipcars-widget-shell w-full rounded-lg border border-slate-200 bg-[#f8fafc] p-3 sm:p-4 ${className}`}>
      {status === "loading" ? (
        <div className="mb-4 rounded-md border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700">
          Loading secure booking engine...
        </div>
      ) : null}

      {status === "error" ? (
        <div className="mb-4 rounded-md border border-blue-200 bg-blue-50 px-4 py-3 text-sm text-slate-700">
          The booking engine is taking longer than expected to load. Please refresh
          the page, or try again shortly.
        </div>
      ) : null}

      <div id={widgetDivId} ref={containerRef} className="min-h-24 w-full max-w-full overflow-visible" />
      <p className="mt-3 px-1 text-xs leading-5 text-slate-500">
        Reservations are fulfilled by VIP Cars and the applicable rental supplier.
      </p>
    </div>
  );
}
