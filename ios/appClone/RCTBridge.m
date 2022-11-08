//
//  RCTBridge.m
//  appClone
//
//  Created by TuPT on 23/09/2022.
//

#import <React/RCTBridgeModule.h>
#import <React/RCTLog.h>
#import <React/RCTViewManager.h>

@interface RCT_EXTERN_MODULE(HelloWorldModule, NSObject)
RCT_EXTERN_METHOD(getName: (RCTResponseSenderBlock*)callBack)
RCT_EXTERN_METHOD(simpleMethodWithParams: (NSString *)param (RCTResponseSenderBlock*) =callback)
+ (BOOL)requiresMainQueueSetup { return YES; }
@end


@interface RCT_EXTERN_MODULE(NativeViewManager, RCTViewManager)

@end
