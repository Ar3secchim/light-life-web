'use client';
import * as React from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';

import { cn } from '../lib/lib';

const Navigation = TabsPrimitive.Root;

const NavigationList = React.forwardRef(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      'shadow-lg-invert sticky flex h-20 w-full items-center justify-around rounded-lg rounded-t-[26px] bg-green-50 px-4 py-2',
      className
    )}
    {...props}
  />
));
NavigationList.displayName = TabsPrimitive.List.displayName;

const NavigationTrigger = React.forwardRef(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      'inline-flex items-center justify-around gap-2 px-4 py-2 text-sm font-medium text-green-200 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none data-[state=active]:rounded-2xl data-[state=active]:border-2 data-[state=active]:border-primary data-[state=active]:font-bold data-[state=active]:text-primary',
      className
    )}
    {...props}
  />
));
NavigationTrigger.displayName = TabsPrimitive.Trigger.displayName;

const NavigationContent = React.forwardRef(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      'mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
      className
    )}
    {...props}
  />
));
NavigationContent.displayName = TabsPrimitive.Content.displayName;

export { Navigation, NavigationList, NavigationTrigger, NavigationContent };
