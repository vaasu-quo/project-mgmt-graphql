import React, { ComponentType, ReactNode, Suspense } from "react";

// HOC to wrap components in Suspense
const withSuspense = <P extends object>(
  WrappedComponent: ComponentType<P>,
  FallbackComponent: ReactNode = <div>Loading...</div>
) => {
  return (props: P) => (
    <Suspense fallback={FallbackComponent}>
      <WrappedComponent {...props} />
    </Suspense>
  );
};

export default withSuspense;
