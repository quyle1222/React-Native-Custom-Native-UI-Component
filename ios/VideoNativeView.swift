//
//  VideoNativeView.swift
//  appClone
//
//  Created by TuPT on 08/11/2022.
//

import AVKit
import AVFoundation

class VideoNativeView: UIView{
  private var player = AVPlayer(url: NSURL())
  private var url:String?
  
  override init(frame: CGRect) {
    super.init(frame: frame)
    setupUI()
  }
  
  required init?(coder aDecoder: NSCoder) {
    super.init(coder: aDecoder)
    setupUI()
  }
  
  func setupUI(){
    
  }
  
  @objc func setURL(_ url: String) {
    player.url(NSURL(fileURLWithPath:url), resourceDidFailLoadingWithReason: "")
  }
}
