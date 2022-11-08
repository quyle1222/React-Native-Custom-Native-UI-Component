//
//  ViewManager.swift
//  appClone
//
//  Created by TuPT on 08/11/2022.
//

import Foundation
@objc(VideoNativeViewManager)
class VideoNativeViewManager: RCTViewManager {
  override static func requiresMainQueueSetup() -> Bool {
     return true
   }
  
   override func view() -> UIView! {
     return VideoNativeView()
   }
}
