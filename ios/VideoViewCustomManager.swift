//
//  NativeViewManager.swift
//  appClone
//
//  Created by TuPT on 08/11/2022.
//

import Foundation

@objc(VideoViewCustomManager)
class VideoViewCustomManager: RCTViewManager {
  override static func requiresMainQueueSetup() -> Bool {
    return true
  }
  
  override func view() -> UIView! {
    return NativeViewCustom()
  }
}
