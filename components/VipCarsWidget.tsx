"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type VipCarsPage = "step1" | "step2" | "managebooking";

type VipCarsDefaultValues = {
  affiliate_id: string;
  aff_tid: string;
  page: VipCarsPage;
  div_id: "bookingengine";
  step2Url: string;
  terms_page: string;
  privacy_page: string;
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
  }
}

const affiliateId = "vip_3363";
const trackingId = "pHPGL749535178";
const widgetDivId = "bookingengine";
const vipScriptUrl = "https://res.supplycars.com/jsbookingengine/script1.js?v=0.04";
const jqueryUrl = "https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js";

let jqueryPromise: Promise<void> | null = null;
let activeBootstrapScript: HTMLScriptElement | null = null;

function getPublicSiteUrl() {
  if (
    typeof window !== "undefined" &&
    (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1")
  ) {
    return window.location.origin;
  }

  return (process.env.NEXT_PUBLIC_SITE_URL || "https://www.carrentalsky.com").replace(/\/$/, "");
}

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
  const siteUrl = getPublicSiteUrl();
  const common = {
    affiliate_id: affiliateId,
    aff_tid: trackingId,
    page,
    terms_page: `${siteUrl}/terms-and-conditions`,
    privacy_page: `${siteUrl}/privacy-policy`,
    step2Url: `${siteUrl}/search`,
    div_id: widgetDivId
  } satisfies Partial<VipCarsDefaultValues>;

  if (page === "step1") {
    return {
      ...common,
      page,
      formType: "form6",
      language: "en",
      currency: "",
      show_multilingual: "1",
      pickup_country: "",
      pickup_city: "",
      pickup_loc: "",
      unsubscribe_page: "",
      div_id: widgetDivId
    };
  }

  if (page === "step2") {
    return {
      ...common,
      page,
      manage_booking_page: `${siteUrl}/manage-booking`,
      hide_insurance: "0",
      div_id: widgetDivId
    };
  }

  return {
    ...common,
    page,
    language: "en",
    show_multilingual: "0",
    manage_booking_page: `${siteUrl}/manage-booking`,
    div_id: widgetDivId
  };
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
    setStatus("loading");

    if (!container) {
      setStatus("error");
      return;
    }

    const widgetContainer = container;

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

        window.default_values = values;

        if (activeBootstrapScript) {
          activeBootstrapScript.remove();
          activeBootstrapScript = null;
        }

        const script = document.createElement("script");
        script.src = `${vipScriptUrl}&_=${Date.now()}`;
        script.async = true;
        script.dataset.vipcarsBootstrap = "true";
        script.onload = () => {
          if (!cancelled && hasLoadedWidgetContent(widgetContainer)) {
            setStatus("ready");
          }
        };
        script.onerror = () => {
          if (!cancelled) {
            setStatus("error");
          }
        };
        activeBootstrapScript = script;
        document.body.appendChild(script);
      } catch {
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
      widgetContainer.innerHTML = "";
      cleanupVipArtifacts();
    };
  }, [values]);

  return (
    <div className={`vipcars-widget-shell rounded-lg border border-[#d9e3f0] bg-white p-4 sm:p-5 ${className}`}>
      {status === "loading" ? (
        <div className="mb-4 rounded-md border border-[#d9e3f0] bg-[#f5f8fc] px-4 py-3 text-sm text-slate-600">
          Loading secure booking engine...
        </div>
      ) : null}

      {status === "error" ? (
        <div className="mb-4 rounded-md border border-skybrand-500/30 bg-skybrand-500/10 px-4 py-3 text-sm text-slate-700">
          The booking engine is taking longer than expected to load. Please refresh
          the page, or try again shortly.
        </div>
      ) : null}

      <div id={widgetDivId} ref={containerRef} className="min-h-24 w-full max-w-full overflow-x-auto" />
      <p className="mt-3 text-xs leading-5 text-slate-500">
        Reservations are fulfilled by VIP Cars and the applicable rental supplier.
      </p>
    </div>
  );
}
